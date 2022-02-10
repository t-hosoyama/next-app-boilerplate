import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import { ErrorBoundary } from '~/components/utils/ErrorBoundary'
import { GlobalStyle } from '~/components/utils/GlobalStyle'
import { ErrorContainer } from '~/containers/ErrorContainer'
import { client } from '~/graphql/config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<ErrorContainer />}>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <GlobalStyle />
          <Component {...pageProps} />
        </RecoilRoot>
      </ApolloProvider>
    </ErrorBoundary>
  )
}

export default MyApp
