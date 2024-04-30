import { createSlice } from "@reduxjs/toolkit";

let todoSlice = createSlice({
  name: "Todo",
  initialState: { todo: [] },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todo.push({ task: payload, isCompleted: false });
    },
    deleteTodo: (state, { payload }) => {
      state.todo = state.todo.filter((e, i) => i !== payload.index);
    },
    completeTodo: (state, { payload }) => {
      let updatedArr = state.todo.map((e, i) => {
        if (i === payload.index) {
          return { ...e, isCompleted: payload.status };
        } else {
          return e;
        }
      });
      state.todo = updatedArr;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
