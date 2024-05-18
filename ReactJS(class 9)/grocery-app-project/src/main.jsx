import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GroceryProvider from './context/grocery.contex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GroceryProvider>
      <App />
    </GroceryProvider>
  </React.StrictMode>,
)
