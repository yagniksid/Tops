import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser = createAsyncThunk("fetchUser", () => {
    // console.log("🚀 ~ getAllUser ~ id:", id)
    return axios({
        method: "get",
        url: "https://fakestoreapi.com/users"
    }).then((res) => {
        // console.log("res", res.data)
        return res.data
    }).catch((err) => {
        // console.log("err", err)
        return err.message
    })
})

const userSlice = createSlice({
    name: "user",
    initialState: { user: [], pending: false, errorMsg: "" },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.pending = false
        }).addCase(getAllUser.pending, (state, action) => {
            state.pending = true
        }).addCase(getAllUser.rejected, (state, action) => {
            state.errorMsg = action.error.message
            state.pending = false
        })
    }
})

export default userSlice.reducer

