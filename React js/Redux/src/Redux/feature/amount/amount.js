import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
    name: "amountCounter",
    initialState: { amount: 200 },
    reducers: {}
});

export default amountSlice.reducer