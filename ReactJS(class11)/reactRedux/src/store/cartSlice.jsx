import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state,action)=>{
            state.list.push(action.payload)
        },
        removeProduct: (state,action)=>{
            state.list = state.list.filter(item=>item.id!==action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer