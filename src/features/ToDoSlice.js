import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'ToDoList',
    initialState,
    reducers: { 
        addToDo: (state, action) => {
            return { items: [...state.items, action.payload] }
        },
        remove: (state, action) => {
            console.log(action)
            let arr = [...state.items]
            let i = action.payload
            if(i != -1) {
                arr.splice(i, 1)
                return {items: arr}
            }
        },
        clearToDo: () => {
            return { items : {}}
        }
    
    }
})
export const { addToDo, clearToDo} = todoSlice.actions
export default todoSlice.reducer