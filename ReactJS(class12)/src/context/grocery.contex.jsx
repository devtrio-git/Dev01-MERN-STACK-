import { createContext, useEffect, useReducer } from "react"
import { groceryReducer } from "./reducer/grocery.reducer";


const initialValues = [
    {
        id: 1,
        title: 'rice',
        buy: false
    },
    {
        id: 2,
        title: 'meat',
        buy: true
    },
    {
        id: 3,
        title: 'chicken',
        buy: false
    },
]

export const groceryContext = createContext(initialValues);

function GroceryProvider({ children }) {
    const persist_grocerylist = JSON.parse(localStorage.getItem("g")) || initialValues;

    const [states, dispatch] = useReducer(groceryReducer, persist_grocerylist)



    useEffect(() => {
        localStorage.setItem("g", JSON.stringify(states))
    }, [states]);

    function addItem(data) {
        dispatch({ type: "ADD_ITEM", payload: { id: Date.now(), title: data, buy: false } })
    }

    function removeItem(data) {
        dispatch({ type: "REMOVE_ITEM", payload: data })
    }


    function toggleBuy(data) {
        dispatch({ type: "TOGGLE_BUY", payload: data })
    }


    return <groceryContext.Provider value={{
        groceries: states,
        addItem,
        removeItem,
        toggleBuy
    }}>
        {children}
    </groceryContext.Provider>
}

export default GroceryProvider;