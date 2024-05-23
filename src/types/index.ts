import { z } from "zod"

export type Drink = z.infer<typeof DrinkSchema>
export type Drinks = z.infer<typeof DrinksSchema>
export type Category = z.infer<typeof CategoriesSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>

export const DrinkSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})

export const DrinksSchema = z.object({
    drinks: z.array(DrinkSchema)
})

export const CategoriesSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const RecipeAPIResponseSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
})