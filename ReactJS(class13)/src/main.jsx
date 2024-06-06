import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GroceryProvider from './context/grocery.contex.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.jsx'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GroceryProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </GroceryProvider>
  </React.StrictMode>,
)
