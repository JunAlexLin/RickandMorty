import { createBrowserRouter } from "react-router-dom";
import App from './App'
import HomePage from "./pages/HomePage";
import About from "./pages/About"
import NotFound from "./pages/NotFound";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import Favorites from "./pages/Favorites"
import ErrorPage from "./pages/ErrorPage";

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
            },{
                path:"*",
                element: <NotFound />
            }

        ],
        errorElement: <ErrorPage />
    }
    
]
)

export default router