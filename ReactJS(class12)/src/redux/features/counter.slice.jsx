import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name : 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state, action)=>{
            state.value++;
        },
        decrement: (state, action)=>{
            state.value--;
        },
        decrementByValue: (state, action)=>{
            state.value -= action.payload;
        },
    }
})


export const {increment, decrement, decrementByValue} = counterSlice.actions;
export default counterSlice.reducer;