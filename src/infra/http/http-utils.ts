import { defaultErrorMessages } from './default-error-messages'
import { HttpErrorResponse } from './http-contracts'

export const createAbortController = (timeout?: number): AbortController | null => {
  if (timeout) {
    const controller = new AbortController()
    setTimeout(() => {
      controller.abort()
    }, timeout)
    return controller
  }
  return null
}

export const handleErrorResponse = async (response: Response): Promise<never> => {
  let message: string
  const status = response.status

  try {
    const responseData = await response.json()
    message = responseData?.error || defaultErrorMessages[status] || defaultErrorMessages.network
  } catch (error) {
    message = defaultErrorMessages[status] || defaultErrorMessages.network
  }

  const errorResponse: HttpErrorResponse = { status, message }
  throw errorResponse
}

export const handleTimeoutError = (): never => {
  throw new Error(defaultErrorMessages.timeout)
}
