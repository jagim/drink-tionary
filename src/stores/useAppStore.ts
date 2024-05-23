import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { IndexSliceType, createIndexSlice } from "./indexSlice"
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice"
import { NotificationSliceType, createNotificationSlice } from "./notificationSlice"


export const useAppStore = create<IndexSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createIndexSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))
