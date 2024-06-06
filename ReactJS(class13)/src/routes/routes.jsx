import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import ProductInfo from "../Product-info";

export const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/product/:product_id',
        element: <ProductInfo></ProductInfo>
    },
])