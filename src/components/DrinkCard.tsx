import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {
    const selectRecipe = useAppStore((state) => state.selectRecipe)

    return (
        <article className="border border-black rounded-lg shadow-xl overflow-hidden max-w-xs">
            <header className="text-2xl truncate font-black text-center p-3"># {drink.strDrink}</header>
            <div className="overflow-hidden">
                <img
                    className="hover:scale-125 transition-transform hover:rotate-2"
                    src={drink.strDrinkThumb}
                    alt={`${drink.strDrink} image`}
                />
            </div>
            <footer className="items-center justify-center">
                <button
                    type="button"
                    className="text-2xl font-bold p-3 bg-orange-400 hover:bg-orange-500 w-full"
                    onClick={() => selectRecipe(drink.idDrink)}
                >Do it!</button>
            </footer>
        </article>
    )
}