// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

const mealtoken = '9973533'

export const getRecipes = async (req: NextApiRequest, res: NextApiResponse) => {
  const recipes = await fetch(`https://www.themealdb.com/api/json/v2/${mealtoken}/latest.php`)
  const data = await recipes.json()
  return data
}
