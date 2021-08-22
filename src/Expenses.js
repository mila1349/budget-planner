import React, {useContext, useState} from 'react'
import './App.css'
import {BudgetContext} from './BudgetContext'
import Item from './ExpensesItem'
import SeacrhExpenses from './SearchExpenses'


export default function Expenses() {
    const {expenses, dispatch}=useContext(BudgetContext);
    
    return (
        <div className="expenses">
            <h1>Expenses</h1>
                <SeacrhExpenses/>
                {
                    expenses.map(item=>(
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
