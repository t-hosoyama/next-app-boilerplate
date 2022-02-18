type RequestConfig = {
  method: 'get' | 'put' | 'patch' | 'post' | 'delete'
  url: string
  params?: any
  data?: any
  responseType?: string
}

export const baseURL = 'http://localhost:8003'

export const customInstance = async <T>({
  url,
  method,
  params,
  data,
}: RequestConfig): Promise<T> => {
  const controller = new AbortController()
  const signal = controller.signal
  const token = globalThis.localStorage?.getItem('token')

  // eslint-disable-next-line no-undef
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  if (token !== null) {
    headers.authorization = `Bearer ${token}`
  }

  const response = await fetch(`${baseURL}${url}${new URLSearchParams(params)}`, {
    method,
    signal,
    headers,
    ...(data ? { body: JSON.stringify(data) } : {}),
  })

  // @ts-ignore
  response.cancel = () => {
    controller.abort()
  }

  return response.json()
}

export type ErrorType<T = any> = Error & {
  __error: T
}
