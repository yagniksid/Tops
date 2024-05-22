import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../config";

export const fetchCart = createAsyncThunk("fetchCart", (token) => {
    return axios({
        method: "get",
        url: `${BE_URL}/cart/getAll`,
        headers: {
            authorization: `bearer ${token} `
        }
    }).then((res) => {
        return res.data
    })
})


let cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [], error: "", reFetch: true, cartId: "" },
    reducers: {
        reFetch: (state, action) => {
            state.reFetch = !state.reFetch
        },
    }, extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, { payload }) => {
            state.cart = payload.data
            state.cartId = payload.cartId
        })
        builder.addCase(fetchCart.rejected, (state, { error }) => {
            state.error = error.message
        })
    }
})

export default cartSlice.reducer
export const { reFetch } = cartSlice.actions
