import React, {useRef, useContext} from 'react'
import './App.css'
import {BudgetContext} from './BudgetContext'
import {v4 as uuidv4} from 'uuid'

export default function Add() {
    const {dispatch}=useContext(BudgetContext);
    const nameRef=useRef();
    const costRef=useRef();

    function handleAdd(){
        const expense={
            id:uuidv4(),
            name:nameRef.current.value,
            cost:costRef.current.value,
        }
        dispatch({type:"add_expense", payload:expense});
        nameRef.current.value="";
        costRef.current.value="";
        
    }

    return (
        <div className="add">
            <h1>Add Expense</h1>
            <input type="text" ref={nameRef} placeholder="Expenses Name" />
            <input type="number" ref={costRef} placeholder="Cost" />
            <button onClick={handleAdd}>save</button>
        </div>
    )
}
