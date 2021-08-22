import React, {useContext} from 'react'
import './App.css'
import {BudgetContext} from './BudgetContext'

const Item = (props)=>{
    const {dispatch}=useContext(BudgetContext);

    function deleteItem(){
        //console.log(props.id);
        dispatch({
            type:"delete_expense",
            payload:props.id,
        })
    }

    return(
        <div className="item">
            <span>{props.name}</span>
            <span className="expenses-info">
                <strong>{props.cost}</strong>
                <div onClick={deleteItem} className="delete">X</div>
            </span>
        </div>
    )
}

export default Item;