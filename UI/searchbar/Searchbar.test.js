import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import "jest-styled-components"
import { prettyDOM } from "@testing-library/dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "../themes/theme"
import meals, { meal } from "../../utils/mockData"
import Searchbar from "./Searchbar"

describe("searchbar", () => {
  let component
  const trigger = jest.fn()
  beforeEach(() => {
    jest.clearAllMocks()
    component = render(
      <ThemeProvider theme={lightTheme}>
        <Searchbar searchHandler={trigger} />
      </ThemeProvider>
    )
  })

  test("must render the searchbar", () => {
    component.container.querySelector(".fa-search")
  })

  test("must trigger the search", async () => {
    const input = component.container.querySelector("input")

    fireEvent.change(input, { target: { value: "ch" } })
    fireEvent.change(input, { target: { value: "chickeno" } })
    const close = await component.container.querySelector(".fa-close")

    fireEvent.click(close)
    expect(trigger).toHaveBeenCalledTimes(4)
  })

  test("open the filters", () => {
    const button = component.container.querySelector(".fa-filter")
    fireEvent.click(button)
    const list = component.container.querySelector(".filter-drop")
    expect(list).toBeInTheDocument()
  })

  test("open the filters and click All", () => {
    const button = component.container.querySelector(".fa-filter")
    fireEvent.click(button)
    const list = component.container.querySelector(".filter-drop")

    expect(list).toBeInTheDocument()
    const cat = component.getByText(/All/i)
    fireEvent.click(cat)

    expect(trigger).toHaveBeenCalledTimes(2)
  })

  test("open the filters and click Category", () => {
    const button = component.container.querySelector(".fa-filter")
    fireEvent.click(button)
    const list = component.container.querySelector(".filter-drop")

    expect(list).toBeInTheDocument()
    const cat = component.getByText(/Category/i)
    fireEvent.click(cat)

    expect(trigger).toHaveBeenCalledTimes(2)
  })

  test("open the filters and click Ingredients", () => {
    const button = component.container.querySelector(".fa-filter")
    fireEvent.click(button)
    const list = component.container.querySelector(".filter-drop")

    expect(list).toBeInTheDocument()
    const cat = component.getByText(/Ingredients/i)
    fireEvent.click(cat)

    expect(trigger).toHaveBeenCalledTimes(2)
  })
})
