import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import "jest-styled-components"
import { prettyDOM } from "@testing-library/dom"
import Card from "./Card"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "../themes/theme"
import { meal } from "../../utils/mockData"

describe("Card", () => {
  let component
  const trigger = jest.fn()
  beforeEach(() => {
    component = render(
      <ThemeProvider theme={lightTheme}>
        <Card data={meal} handleFavourite={trigger} isFav={true} />
      </ThemeProvider>
    )
  })

  test("renders a Card with data", () => {
    const title = component.getByText(meal.strMeal)
    const thumb = component.getByAltText(meal.strMeal)
    const marker = component.container.querySelector(".fa-bookmark")

    expect(title).toBeInTheDocument()
    expect(thumb.getAttribute("src")).toContain(meal.strMealThumb)
    fireEvent.click(marker)
    expect(marker.getAttribute("class")).toContain("fa-solid")
    expect(trigger).toHaveBeenCalledTimes(1)
    // console.log(prettyDOM(thumb))
  })

  test("renders in horizontal mode", () => {
    const component = render(
      <ThemeProvider theme={lightTheme} orientation="hor">
        <Card data={meal} />
      </ThemeProvider>
    )

    component.container.querySelector(".hor")
  })
})
