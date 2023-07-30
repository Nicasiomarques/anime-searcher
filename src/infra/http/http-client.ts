import { HttpClientOptions, HttpResponse } from './http-contracts'
import { createAbortController, handleErrorResponse } from './http-utils'

export const httpClient = async <T>(url: string, options: HttpClientOptions = {}) => {
  const controller = createAbortController(options.timeout)
  const requestOptions: RequestInit = {
    method: options.method || 'GET',
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(options.body),
    signal: options.signal || (controller && controller.signal),
  }

  const abortTimeout = options.timeout
    ? setTimeout(() => controller?.abort(), options.timeout)
    : undefined

  const response = await fetch(url, requestOptions)
  
  clearTimeout(abortTimeout)
  
  if (!response.ok) await handleErrorResponse(response)
  const responseData = await response.json()
  const httpResponse: HttpResponse<T> = {
    status: response.status,
    data: responseData,
  }
  return httpResponse
}
