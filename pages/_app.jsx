import "../styles/globals.css"
import React from "react"
// react-query
import { QueryClientProvider, QueryClient } from "react-query"
import { Hydrate } from "react-query/hydration"
import { ReactQueryDevtools } from "react-query/devtools"
import ThemeWrapper from "../components/themeWrapper/ThemeWrapper"

// creating the client
const queryCache = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeWrapper>
          <Component {...pageProps} />
        </ThemeWrapper>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
