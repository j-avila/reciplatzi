import React, { useState, createContext } from "react"
// styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../../UI/themes/theme"

// styled defaults
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Glory:wght@300;400;700&family=Open+Sans:wght@300;400;600&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    background: ${({ colorSchema }) =>
      `${colorSchema === "dark" ? "#1a1a1a" : "#fff"}`};
    color: ${({ colorSchema }) =>
      `${colorSchema === "dark" ? "#fff" : "#1a1a1a"}`};

    h1, h2, h3{
      font-family: 'Glory', serif;
    }
    h1{
      font-size: 80px;
    }
  }
`
export const Context = createContext({
  theme: "light",
  setContext: () => {},
})

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState("light")
  Context.displayName = "themeContext"
  const setContext = (args) => setTheme(args)

  return (
    <>
      <Context.Provider value={{ theme, setContext }}>
        <GlobalStyle colorSchema={theme} />
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          {children}
        </ThemeProvider>
      </Context.Provider>
    </>
  )
}

export default ThemeWrapper
