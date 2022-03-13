import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import { prettyDOM } from "@testing-library/dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "../themes/theme"
import "jest-styled-components"
import Button from "./Button"

describe("Button", () => {
  test("renders a button", () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Button>Click me</Button>
      </ThemeProvider>
    )
    const button = getByText(/Click me/i)
    expect(button).toBeInTheDocument()
    // console.log(prettyDOM(button))
  })

  test("renders a button with a custom color", () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Button variant="accent">Click me</Button>
      </ThemeProvider>
    )
    const button = getByText(/Click me/i)
    expect(button).toHaveStyleRule("background", "#FFCB4B")
  })

  test("renders a button with a custom size", () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Button size="large" fullWidth={true}>
          Click me
        </Button>
      </ThemeProvider>
    )
    const button = getByText(/Click me/i)
    expect(button).toHaveStyleRule("width", "100%")
  })

  test("renders a button with an icon", () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Button icon="fa-solid fa-search">Click me</Button>
      </ThemeProvider>
    )
    const button = getByText(/Click me/i)
    const icon = button.querySelector(".fa-search")
    // console.log(prettyDOM(icon))
    expect(icon.getAttribute("class")).toContain("fa-search")
  })

  test("Should trigger the onClick event", () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Button onClick={onClick}>Click me</Button>
      </ThemeProvider>
    )
    const button = getByText(/Click me/i)
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
