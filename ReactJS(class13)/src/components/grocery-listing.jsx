import React, { useContext, useState } from 'react'
import { groceryContext } from '../context/grocery.contex'

const GroceryListing = (props) => {
    const { groceries, addItem, removeItem, toggleBuy } = useContext(groceryContext);

    const [check_buy, setCheckBuy] = useState(props.data.buy)

    return (
        <div className='list-item'>
            <input type="checkbox" className='check' checked={check_buy} onChange={() => {
                setCheckBuy(!check_buy)
                toggleBuy(props.data)
                }} />
            <h3>{props.data.title}</h3>
            <span onClick={() => removeItem(props.data)}>Remove</span>
        </div>
    )
}

export default GroceryListing
