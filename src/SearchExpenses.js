import React, {useContext,useState} from 'react'
import {BudgetContext} from './BudgetContext'
import Item from './ExpensesItem'

export default function SearchExpenses() {
    const [searchItem, setSearchItem]=useState("");
    const {search, dispatch}=useContext(BudgetContext);

    function handleSeacrh(){
        dispatch({
            type:"seacrh_expense",
            payload:searchItem,
        })
    }

    return (
        <div>
            <input onChange={(e)=>{setSearchItem(e.target.value)}} type="search" placeholder="Type to Search..." />
            <button onClick={handleSeacrh}>seacrh</button>
                { 
                    search.map(item=>(
                        <Item
                            id={item.id}
                            name={item.name}
                            cost={item.cost}
                        />
                    ))
                } 
        </div>
    )
}
