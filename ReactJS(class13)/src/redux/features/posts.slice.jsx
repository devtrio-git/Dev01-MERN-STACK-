import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    posts: [],
    error: "",
    loader: false,
}


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            state.posts = [];
            state.error = "";
            state.loader = true;
        })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.error = "";
                state.loader = false;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.posts = [];
                state.error = "Failed to fetch posts";
                state.loader = false;
            })

    }
});


export const getPosts = createAsyncThunk('posts', async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return data.slice(0, 5);
    } catch (error) {
        throw error
    }
})


export default postSlice.reducer;