import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import "jest-styled-components"
import { prettyDOM } from "@testing-library/dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "../themes/theme"
import meals, { meal } from "../../utils/mockData"
import Drawer from "./Drawer"

describe("favorites drawer", () => {
  let component
  const trigger = jest.fn()
  beforeEach(() => {
    component = render(
      <ThemeProvider theme={lightTheme}>
        <Drawer
          data={meals}
          transitionExit={false}
          handleExit={trigger}
          open={true}
          handleFavs={trigger}
        />
      </ThemeProvider>
    )
  })

  test("show the drawer with data and clicks", () => {
    component.getByText("Your favorites")
    component.getByText(meal.strMeal)

    const closeButton = component.container.querySelector(".fa-close")
    const outside = component.container.querySelector(".veil")

    fireEvent.click(closeButton)
    fireEvent.click(outside)
    expect(trigger).toHaveBeenCalledTimes(2)
  })

  test("show the drawer without data", () => {
    const trigger = jest.fn()
    component.rerender(
      <ThemeProvider theme={lightTheme}>
        <Drawer
          data={[]}
          transitionExit={false}
          handleExit={trigger}
          open={true}
          handleFavs={trigger}
        />
      </ThemeProvider>
    )
    component.getByText("Your favorites")
    component.getByText(/Not favorites yet?/i)
  })

  test("hide the drawer", () => {
    const trigger = jest.fn()
    component.rerender(
      <ThemeProvider theme={lightTheme}>
        <Drawer open={false} handleExit={trigger} transitionExit={true} />
      </ThemeProvider>
    )
    const title = component.queryByText(/Your favorites/i)
    expect(title).not.toBeInTheDocument()
  })
})
