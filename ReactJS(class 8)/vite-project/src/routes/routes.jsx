import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";


export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>
    },
    {
        path: "/about",
        element: <AboutPage></AboutPage>
    },
])