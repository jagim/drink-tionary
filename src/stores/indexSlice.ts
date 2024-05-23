import { StateCreator } from "zustand"
import { Category, Drink, Drinks, Recipe, SearchFilter } from "../types"
import { getCategories, getRandomDrinks, getRecipeById, getRecipes } from "../services"

export type IndexSliceType = {
    randomDrinks: Drinks
    categories: Category
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    getRandom: () => Promise<void>
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createIndexSlice: StateCreator<IndexSliceType> = (set) => ({
    randomDrinks: { drinks: [] },
    categories: { drinks: [] },
    drinks: { drinks: [] },
    selectedRecipe: {} as Recipe,
    modal: false,
    getRandom: async () => {
        const randomDrinks = await getRandomDrinks()
        set({ randomDrinks })
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({ categories })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({ drinks })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({ selectedRecipe, modal: true })
    },
    closeModal: () => {
        set({
            selectedRecipe: {} as Recipe,
            modal: false
        })
    }
})
