import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

import { ErrorBoundary } from '~/components/utils/ErrorBoundary'
import { GlobalStyle, theme } from '~/components/utils/GlobalStyle'
import { LoadingSpinner } from '~/components/utils/LoadingSpinner'
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
    <ThemeProvider theme={theme}>
      <ErrorBoundary fallback={<ErrorContainer />}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <GlobalStyle />
            <Component {...pageProps} />
            <LoadingSpinner />
          </RecoilRoot>
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default MyApp
