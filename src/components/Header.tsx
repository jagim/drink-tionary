import { useMemo } from "react"
import Logo from "./Logo"
import { NavLink, useLocation } from "react-router-dom"

export default function Header() {
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    return (
        <header>
            <div className="bg-orange-400 w-full h-auto">
                <div className="container mx-auto flex sm:flex-row justify-between flex-col items-center">
                    <Logo />
                    <nav className="flex gap-2 text-2xl font-extrabold uppercase mt-4 mx-5">
                        <NavLink className="p-2 hover:bg-orange-500 rounded-lg" to="/">Home</NavLink>
                        <NavLink className="p-2 hover:bg-orange-500 rounded-lg" to="/favorites">Favorites</NavLink>
                    </nav>
                </div>
            </div>
            <div className={isHome ? "flex justify-center border border-black" : ""}>
                <img src="/Drink-Tionary-banner.jpg" alt="banner image" className="w-full max-h-[40rem]" />
            </div>
        </header >
    )
}