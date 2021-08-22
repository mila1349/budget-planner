import React, { useContext } from 'react'
import './App.css'
import {BudgetContext} from './BudgetContext'


export default function Remaining() {
    const {remaining}=useContext(BudgetContext)
    return (
        <div className="remaining section-1">
            Remaining: <strong>$ {remaining}</strong>
        </div>
    )
}
