import React, { useContext } from 'react'
import { RouterProvider } from 'react-router-dom'
import { appRoutes } from './routes/routes'
import { myContext } from './context/context';
function App() {
  const { is_dark } = useContext(myContext);


  return (
    <div data-theme={is_dark ? 'dark' : 'light'}>
      <RouterProvider router={appRoutes}></RouterProvider>
    </div>
  )
}

export default App
