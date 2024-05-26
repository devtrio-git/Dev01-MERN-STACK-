import React, { useContext, useState } from 'react'
import { groceryContext } from '../context/grocery.contex';

const InputTxt = () => {

    const { groceries, addItem } = useContext(groceryContext)

    const [input_txt, setInputTxt] = useState("");



    return (
        <div>
            <input
                type="text"
                placeholder='Add Grocery Item'
                value={input_txt}
                onChange={(e) => setInputTxt(e.target.value)}
            />


            <div>
                <button onClick={() => {
                    addItem(input_txt)
                    setInputTxt("")
                }}>Add Item</button>
            </div>

        </div>
    )
}

export default InputTxt
