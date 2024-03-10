import { createBrowserRouter } from "react-router-dom";
import App from './App'
import HomePage from "./pages/HomePage";
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import Favorites from "./pages/Favorites"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/characters",
                element: <CharactersPage />
            },
            {
                path: "/characters/:id",
                element: <CharacterDetailsPage />
            },{
                path:"/favorites",
                element: <Favorites />
            }

        ],
        errorElement: <ErrorPage />
    }
    
]
)

export default router