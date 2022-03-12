import React from "react"
import { Spinner } from "./Loader.styles"

export const Loader = () => {
  return (
    <Spinner>
      <i className="fa-solid fa-rotate fa-spin" />
      <p>Asking to the nona, this must be fast...</p>
    </Spinner>
  )
}
