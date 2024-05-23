import { useEffect, useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"
import Title from "../components/Title"
import SearchBar from "../components/SearchBar"
import NoContent from "../components/NoContent"

export default function IndexView() {
    const getRandom = useAppStore((state) => state.getRandom)
    const randomDrinks = useAppStore((state) => state.randomDrinks)
    const drinks = useAppStore((state) => state.drinks)
    const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])

    useEffect(() => {
        getRandom()
    }, [])

    const handleClick = () => {
        return getRandom()
    }

    return (
        <div className="container mx-auto">
            <Title title="How Do You Want To Start Today?" />
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-10 gap-10 place-items-center">
                {randomDrinks.drinks.map(drink => (
                    <DrinkCard key={drink.idDrink} drink={drink} />
                ))}
            </div>
            <div className="flex justify-center mt-16">
                <button
                    type="button"
                    className="w-1/4 rounded-lg text-xl font-bold uppercase p-3 bg-orange-500 hover:bg-orange-600 shadow-md"
                    onClick={handleClick}
                >Get Me Some Random!</button>
            </div>
            <div className="mt-16">
                <Title title="Search your next Drink!" />
                <SearchBar />
            </div>
            {hasDrinks ? (
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 my-10 gap-10">
                    {drinks.drinks.map((drink) => (
                        <DrinkCard
                            key={drink.idDrink}
                            drink={drink}
                        />
                    ))}
                </div>
            ) : (
                <NoContent message="There are no recipes yet..." />
            )}
        </div>
    )
}