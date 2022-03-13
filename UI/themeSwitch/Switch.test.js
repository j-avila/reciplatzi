import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import { prettyDOM } from "@testing-library/dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "../themes/theme"
import "jest-styled-components"
import Switch from "./Switch"

describe("Switch", () => {
  let component
  const onChange = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    component = render(
      <ThemeProvider theme={lightTheme}>
        <Switch onClick={onChange} theme="light" />
      </ThemeProvider>
    )
  })

  test("renders a Switch and switch theme", () => {
    const switchMoon = component.container.querySelector(".fa-moon")
    const switchDay = component.container.querySelector(".fa-sun")

    fireEvent.click(switchMoon)
    expect(switchMoon).toBeInTheDocument()
    fireEvent.click(switchDay)
    expect(switchDay.getAttribute("class")).toContain("active")
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  test("renders a Switch and switch to dark theme", () => {
    component.rerender(
      <ThemeProvider theme={lightTheme}>
        <Switch onClick={onChange} theme="dark" />
      </ThemeProvider>
    )

    const switchMoon = component.container.querySelector(".fa-moon")
    const switchDay = component.container.querySelector(".fa-sun")

    fireEvent.click(switchMoon)
    expect(switchMoon).toBeInTheDocument()
    fireEvent.click(switchDay)
    expect(switchMoon.getAttribute("class")).toContain("active")
    expect(onChange).toHaveBeenCalledTimes(2)
  })
})
