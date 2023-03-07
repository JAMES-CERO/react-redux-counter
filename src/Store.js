import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import todoReducer from "./features/ToDoSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        toDo: todoReducer
    }
})