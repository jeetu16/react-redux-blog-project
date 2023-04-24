import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id : "1", name : "Chetan Bhagat"},
    { id : "2", name : "Raman Sinha" },
    { id : "3", name : "Dave Gray" }
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;