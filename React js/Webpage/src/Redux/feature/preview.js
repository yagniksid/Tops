// import { createSlice } from "@reduxjs/toolkit";


// let previewSlice = createSlice({
//     name: "preview",
//     initialState: { preview: "", reFetch: true },
//     reducers: {
//         getId: (state, action) => {
//             console.log("🚀 ~ action:", action)
//             state.preview = action.payload
//         }, toggleRefresh: (state, action) => {
//             console.log("🚀 ~ toggle :", action)
//             console.log("🚀 ~ state:", state)
//             state.reFetch = !state.reFetch
//         }
//     }
// })

// export default previewSlice.reducer
// export const { getId, toggleRefresh } = previewSlice.actions 

import { createSlice } from "@reduxjs/toolkit";

const previewSlice = createSlice({
    name: "preview",
    initialState: { preview: "", reFetch: true },
    reducers: {
        getId: (state, action) => {
            state.preview = action.payload;
        },
        toggleReFetch: (state) => {
            state.reFetch = !state.reFetch;
        }
    }
});

export const { getId, toggleReFetch } = previewSlice.actions;
export default previewSlice.reducer;
