export default function Logo() {
    return (
        <div className="flex gap-4 mx-5 mt-2 pb-3">
            <img
                src="./Drink-Tionary-logo.png"
                alt="Drink Tionary Logo"
                className="w-40 hover:scale-110"
            />
            <div className="flex flex-col mt-3 border-l border-black">
                <p className="text-2xl ml-4">Your Cocktail</p>
                <p className="text-2xl font-extrabold ml-8"> Dictionary</p>
            </div>
        </div>
    )
}
