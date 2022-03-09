import "../styles/globals.css"
import type { AppProps } from "next/app"
// react-query
import { QueryClientProvider, QueryClient } from "react-query"
import { Hydrate } from "react-query/hydration"
import { ReactQueryDevtools } from "react-query/devtools"
// styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"

const queryCache = new QueryClient()

// styled defaults
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const theme = {
  colors: {
    primary: "#0070f3",
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
