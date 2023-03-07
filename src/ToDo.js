import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, clearToDo } from "./features/ToDoSlice";

const ToDo = () => {

    const list = useSelector((state) => state.toDo.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderList = list.map((item, i) => {
        <li key={i} onClick={() => dispatch(remove(i))} >{item}</li>
    })

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addToDo(input))
    }
    return (
        <div>
            <h1>{renderList}</h1>
            {/* <button onClick={() => dispatch(addToDo())}>
                add an Item
            </button> */}

            <form onSubmit={(e) => submitForm(e)} >
                <input type='text' onChange={(e) => setInput(e.target.value)} />
                <button  type="submit" >Submit</button>
            </form >
            <button onClick={() => dispatch(clearToDo())}>
                clear item
            </button>
        </div>
    )
}

export default ToDo