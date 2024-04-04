import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: { search: "" },
    reducers: {
        setSearchData: (state, action) => {
            console.log("----redux->")
            state.search = action.payload;
        }
    }
});

export default searchSlice.reducer;
export const { setSearchData } = searchSlice.actions;
