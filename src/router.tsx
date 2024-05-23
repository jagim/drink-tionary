import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Suspense, lazy } from "react";

const IndexView = lazy(() => import('./views/IndexView'))
const FavoriteView = lazy(() => import('./views/FavoriteView'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path="/" element={<Suspense fallback="loading..."><IndexView /></Suspense>} />
                    <Route path="/favorites" element={<Suspense fallback="loading..."><FavoriteView /></Suspense>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}