import { createSlice } from "@reduxjs/toolkit";

let productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        getData: (state, action) => {
            state.push({ name: action.payload.name, price: action.payload.price });
        }, updateData: (state, action) => {
            const { index, name, price } = action.payload;
            if (state[index]) {
                state[index].name = name;
                state[index].price = price;
            }
        }, deleteData: (state, action) => {
            const { name, price } = action.payload;
            return state.filter(item => !(item.name === name && item.price === price));
        }
    }
})

export default productSlice.reducer
export const { getData, updateData, deleteData } = productSlice.actions