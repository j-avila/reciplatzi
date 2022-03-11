import "../styles/globals.css"
// react-query
import { QueryClientProvider, QueryClient } from "react-query"
import { Hydrate } from "react-query/hydration"
import { ReactQueryDevtools } from "react-query/devtools"
// styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../UI/themes/theme"

const queryCache = new QueryClient()

// styled defaults
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Glory:wght@300;400;700&family=Open+Sans:wght@300;400;600&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    h1, h2, h3{
      font-family: 'Glory', serif;
    }
    h1{
      font-size: 80px;
    }
  }
`
function MyApp({ Component, pageProps }) {
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
