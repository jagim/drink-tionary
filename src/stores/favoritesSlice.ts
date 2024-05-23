import { StateCreator } from 'zustand'
import { Recipe } from '../types'
import { NotificationSliceType, createNotificationSlice } from './notificationSlice'

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if (get().favoriteExist(recipe.idDrink)) {
            set((state) => ({ favorites: state.favorites.filter(fav => fav.idDrink !== recipe.idDrink) }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Remove From Favorites',
                error: false
            })
        } else {
            set((state) => ({ favorites: [...state.favorites, recipe] }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Add to Favorites',
                error: false
            })
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if (storedFavorites) {
            set({ favorites: JSON.parse(storedFavorites) })
        }
    }
})