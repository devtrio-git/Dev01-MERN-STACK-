import { createBrowserRouter } from "react-router-dom";
import SignupPage from "../pages/auth/sing-up";
import AboutPage from "../pages/about/about-page";
import HomePage from "../pages/home/home-page";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage></HomePage>
    },
    {
        path: '/singup',
        element: <SignupPage></SignupPage>
    },
    {
        path: '/about',
        element: <AboutPage></AboutPage>
    }

])