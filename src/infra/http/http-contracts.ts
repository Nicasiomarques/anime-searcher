export interface HttpClientOptions {
  signal?: AbortSignal
  timeout?: number
  headers?: HeadersInit
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD'
  body?: BodyInit
}

export interface HttpResponse<T> {
  status: number
  data: T
}

export interface HttpErrorResponse {
  status: number
  message: string
}
