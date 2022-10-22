import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", title: "Hello there", content: "First post"},
    {id: "2", title: "Hello there", content: "Second post"},
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        postAdded(state, action){
            state.push(action.payload)
        }
    }
})


export const selectAllPosts = (state)=> state.posts;
export const {postAdded} = postSlice.actions;
export default postSlice.reducer;