// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { useQuery } from "react-query"

const mealtoken = "9973533"

export const getRecipes = async (req) => {
  const params = () => {
    switch (req.type) {
      case "i":
        return `filter.php?i=${req.queryString}`
        break
      case "c":
        return `filter.php?c=${req.queryString}`
        break
      case "s":
        return `search.php?s=${req.queryString}`
        break
      case "r":
        return `randomselection.php`
        break

      default:
        return `latest.php`
        break
    }
  }

  const recipes = await fetch(
    `https://www.themealdb.com/api/json/v2/${mealtoken}/${params()}`
  )
  const data = await recipes.json()
  return data
}

// react query
export const useMeals = (filters, opts = {}) =>
  useQuery(["recipes", filters], () => getRecipes(filters), opts)

// theme query
export const useTheme = (themeHandler) => {
  return useQuery("theme", themeHandler)
}
