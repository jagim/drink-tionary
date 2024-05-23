import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"
import NoContent from "../components/NoContent"

export default function FavoriteView() {
    const favorites = useAppStore((state) => state.favorites)
    const hasFavorites = useMemo(() => favorites.length, [favorites])

    return (
        <>
            <h1 className="text-6xl text-center font-extrabold">Favorites</h1>
            {hasFavorites ? (
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-10 gap-10 place-items-center">
                    {favorites.map(drink =>
                        <DrinkCard
                            key={drink.idDrink}
                            drink={drink}
                        />
                    )}
                </div>
            ) : (
                <NoContent message="Yours favorites will appear here!" />
            )}
        </>
    )
}