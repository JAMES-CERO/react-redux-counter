import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'ToDoList',
    initialState,
    reducers: { 
        addToDo: (state) => {
            return {value: state.value }
        },
        clearToDo: (state, action) => {
            return { value: state.value + action.clear}
        }
    
    }
})
export const { addToDo, clearToDo} = todoSlice.actions
export default todoSlice.reducer