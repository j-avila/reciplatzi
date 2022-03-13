import React from "react"
import { NFWrapper } from "./NotFound.styles"
import Graph from "../../public/assets/notfound.svg"

const NotFound = () => {
  return (
    <NFWrapper>
      <Graph />
      <article>
        <h1>nothing found</h1>
        <p>We can't find anything to match your tastes</p>
      </article>
    </NFWrapper>
  )
}

export default NotFound
