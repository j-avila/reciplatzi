import React, { useEffect } from "react"
// next fetch
import { QueryClient, useQuery } from "react-query"
import { dehydrate } from "react-query/hydration"
import styled from "styled-components"
import { getRecipes } from "./api/hello"

export const getStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery("recipes", getRecipes)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Wrapp = styled.div`
  background-color: papayawhip;
  color: palevioletred;
  padding: 1rem;
  h1 {
    color: tomato;
  }
`

// react rendering
export const Jose = () => {
  // This useQuery could just as well happen in some deeper child to
  // the "Posts"-page, data will be available immediately either way
  const { data } = useQuery("recipes", getRecipes)

  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix
  const { data: otherData } = useQuery("posts-2", getRecipes)

  return (
    <Wrapp>
      <h1>Recetas</h1>
      <ul>
        {data?.meals.map((recipe) => (
          <li key={recipe.idMeal}>{recipe.strMeal}</li>
        ))}
      </ul>
    </Wrapp>
  )
}

export default Jose
