import { RouterProvider } from 'react-router-dom'
import './App.css'
import { appRoutes } from './routes/routes'

function App() {
  
  return (
    <div>

      <RouterProvider router={appRoutes}></RouterProvider>
    </div>
  )
}

export default App
