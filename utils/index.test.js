import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import "jest-styled-components"
import { prettyDOM } from "@testing-library/dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "../UI/themes/theme"
import Home from "../pages/index"
import meals from "./mockData"
import { QueryClient, QueryClientProvider } from "react-query"

describe("Must Render the entire app", () => {
  let component
  const trigger = jest.fn()
  beforeEach(() => {
    const queryCache = new QueryClient()
    component = render(
      <QueryClientProvider client={queryCache}>
        <ThemeProvider theme={lightTheme}>
          <Home props={meals} />
        </ThemeProvider>
      </QueryClientProvider>
    )
  })

  test("Must render the app and do some interactions", () => {
    const app = component.container.querySelector("#app")

    // buttons trigering
    component.container.querySelector(".fa-grip")
    component.container.querySelector(".fa-list")

    expect(app).toBeInTheDocument()
  })
})
