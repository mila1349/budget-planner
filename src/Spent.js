import React, {useContext} from 'react'
import './App.css'
import {BudgetContext} from './BudgetContext'


export default function Spent() {
    const {spent}=useContext(BudgetContext)

    return (
        <div className="spent section-1">
            Spent So Far: <strong>$ {spent}</strong>
        </div>
    )
}
