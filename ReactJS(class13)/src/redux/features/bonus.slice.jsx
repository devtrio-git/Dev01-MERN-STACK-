import { createAction, createSlice } from "@reduxjs/toolkit";


const onDecrementCount = createAction('counter/decrementByValue')

const bonusSlice = createSlice({
    name: 'bonus',
    initialState: { value: 10 },
    reducers: {
        incrementBonus: (state, action) => {
            state.value++;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(onDecrementCount, (state, action) => {
            state.value -= action.payload;
        })
    }
})


export const { incrementBonus } = bonusSlice.actions;
export default bonusSlice.reducer;