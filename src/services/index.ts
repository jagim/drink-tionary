import axios from "axios"
import { CategoriesSchema, Drink, DrinkSchema, DrinksSchema, RecipeAPIResponseSchema, SearchFilter } from "../types"

export async function getRandomDrinks() {
    const randomList = []
    for (let i = 0; i < 4; i++) {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        const { data } = await axios(url)
        const result = DrinkSchema.safeParse(data.drinks[0])
        if (result.success) {
            randomList[i] = result.data
        }
    }
    const formatRandomList = {
        drinks: randomList
    }
    return formatRandomList
}

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const { data } = await axios(url)
    const result = CategoriesSchema.safeParse(data)
    if (result.success) {
        return result.data
    }
}

export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await axios(url)
    const result = DrinksSchema.safeParse(data)
    if (result.success) {
        return result.data
    }
}

export async function getRecipeById(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if (result.success) {
        return result.data
    }
}