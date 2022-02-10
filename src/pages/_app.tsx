import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import { GlobalStyle } from '~/components/utils/GlobalStyle'
import { client } from '~/graphql/config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default MyApp
