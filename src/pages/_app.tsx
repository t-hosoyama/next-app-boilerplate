import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

import { ErrorBoundary } from '~/components/utils/ErrorBoundary'
import { GlobalStyle } from '~/components/utils/GlobalStyle'
import { ErrorContainer } from '~/containers/ErrorContainer'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retry: false,
      // refetchOnWindowFocus: false,
      staleTime: 1000 * 60,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<ErrorContainer />}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default MyApp
