// Todo: 環境変数から取得
export const endpointUrl = 'http://localhost:8080/v1/graphql'

const getFetchParams = () => {
  const token = globalThis.localStorage?.getItem('token')

  const headers =
    token !== null
      ? {
          authorization: `Bearer ${token}`,
        }
      : undefined

  return {
    headers,
  }
}

export const fetchParams = getFetchParams()

export function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpointUrl as string, {
      method: 'POST',
      ...fetchParams,
      body: JSON.stringify({ query, variables }),
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}
