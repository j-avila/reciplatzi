import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import { prettyDOM } from "@testing-library/dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "../themes/theme"
import "jest-styled-components"
import NotFound from "./NotFound"

describe("Render the not found component", () => {
  let component
  beforeEach(() => {
    component = render(
      <ThemeProvider theme={lightTheme}>
        <NotFound />
      </ThemeProvider>
    )
  })

  test("Should render the not found component", () => {
    const { getByText } = component
    getByText(/nothing found/i)
  })
})
