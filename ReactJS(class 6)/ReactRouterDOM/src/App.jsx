import { RouterProvider } from "react-router-dom"
import { publicRoute } from "./routes/router"

function App() {

  return (
    <>
      <RouterProvider router={publicRoute} />
    </>
  )
}

export default App


// 1. creating the routers --> createBrowserRouter
// 2. connect the routes --> RouterProvider
// 3. navigation between the routes
      // 3 methods
        //1. Link 
       //2. NavLink
       //3. useNavigate()

// 4. useParams() --> route --> "/productDetail/:id"
// 5. useSearchParams() --> 