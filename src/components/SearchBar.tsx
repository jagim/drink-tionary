import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useAppStore } from "../stores/useAppStore"

export default function SearchBar() {
    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)
    const showNotification = useAppStore((state) => state.showNotification)

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(searchFilters).includes('')) {
            showNotification({
                text: "All fields are Required",
                error: true
            })
            return
        }
        searchRecipes(searchFilters)
    }

    return (
        <div className="mt-20 mx-5">
            <form
                className="w-fit border-gray-400 border rounded-xl flex md:flex-row flex-col items-center gap-5 p-1 mx-auto shadow-md"
                onSubmit={handleSubmit}
            >
                <div className="flex w-72 gap-3 items-center my-auto mx-4">
                    <label
                        htmlFor="category"
                        className="block uppercase font-extrabold text-lg"
                    >Category</label>
                    <select
                        id="category"
                        name="category"
                        className="p-3 w-full rounded-lg focus:outline-none text-xl"
                        onChange={handleChange}
                        value={searchFilters.category}
                    >
                        <option value="">-- Select --</option>
                        {categories.drinks.map(category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="flex w-72 gap-3 items-center my-auto mx-4">
                    <label
                        htmlFor="ingredient"
                        className="block uppercase font-extrabold text-lg"
                    >Ingredient</label>
                    <input
                        type="text"
                        id="ingredient"
                        name="ingredient"
                        className="p-3 w-full rounded-lg focus:outline-none text-xl"
                        placeholder="Search by Ingredient"
                        onChange={handleChange}
                        value={searchFilters.ingredient}
                    />
                </div>
                <input
                    type="submit"
                    value="Search"
                    className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-xl font-extrabold w-fit h-fit p-3 rounded-lg uppercase my-auto"
                />
            </form>
        </div>
    )
}