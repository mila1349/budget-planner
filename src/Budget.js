import React, {useContext, useState, useRef} from 'react'
import './App.css'
import {BudgetContext} from './BudgetContext'

export default function Budget() {
    const [editFlag,setEditFlag]=useState(false);
    const {budget, dispatch}=useContext(BudgetContext);
    const [edit, setEdit]=useState(budget);

    function change(e){
        setEdit(e.target.value);
    }

    function handleEdit(e){
        setEditFlag(!editFlag);
        if(editFlag){
            dispatch({type:"edit_budget", budget:edit})
            console.log(budget);
        }
    }

    function Input(){
        return (
            <input 
            autoFocus={true} 
            onChange={change} 
            className="input-budget" 
            type="number" 
            value={edit}
            />
        )
    }

    return (
        <div className="budget section-1">
            <span>Budget: <strong>$ {editFlag ? <Input/>:budget}</strong></span> 
            <button onClick={handleEdit}>{editFlag ? 'submit':'edit'}</button>
        </div>
    )
}
