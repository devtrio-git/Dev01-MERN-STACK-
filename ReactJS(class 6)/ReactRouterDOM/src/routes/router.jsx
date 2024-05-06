import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Auth/Login";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";

const publicRoute = createBrowserRouter([
    { path: "/", element: <Home />},
    { path: "/auth/login", element: <Login />},
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact />},
    { path: "/products", element: <Products />},
    // { path: "/productDetail/:productId/:name", element: <ProductDetail /> }
    { path: "/productDetail", element: <ProductDetail /> }
])

export { publicRoute }