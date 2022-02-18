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

  const headers =
    token !== null
      ? {
          authorization: `Bearer ${token}`,
        }
      : undefined

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
