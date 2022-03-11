// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" })
}

const mealtoken = "9973533"

export const getRecipes = async (req, res) => {
  const recipes = await fetch(
    `https://www.themealdb.com/api/json/v2/${mealtoken}/latest.php`
  )
  const data = await recipes.json()
  return data
}
