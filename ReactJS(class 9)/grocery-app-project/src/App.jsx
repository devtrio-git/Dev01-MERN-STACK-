import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputTxt from './components/input-text'
import GroceryListing from './components/grocery-listing'
import { groceryContext } from './context/grocery.contex'

function App() {

  const { groceries } = useContext(groceryContext);


  return (
    <div className='contaner'>
      <h1>Grocery App</h1>
      <InputTxt></InputTxt>
      {groceries?.map(item => <GroceryListing key={item.id} data={item}></GroceryListing>)}




    </div>
  )
}

export default App
