import React, {createContext, useReducer} from 'react'

function BudgetReducer(state, action){
    switch (action.type){
        case "edit_budget":
            return {
                ...state,
                budget:action.budget,
                spent:0,
                remaining:action.budget
            }
        case "add_expense":
            const spentExpenses=state.spent + parseInt(action.payload.cost)
            return {
                ...state,
                expenses:[...state.expenses, action.payload],
                spent:spentExpenses,
                remaining:state.budget - spentExpenses,
            }
        case "delete_expense": 
            const temp=state.expenses.filter(item=>(item.id!==action.payload))
            const tempSearch=state.search.filter(item=>(item.id!==action.payload))
            const tempSpent=state.expenses.filter(item=>(item.id===action.payload))
            const spentExp=state.spent - tempSpent[0].cost
            return{
                ...state,
                spent:spentExp,
                remaining:state.remaining + parseInt(tempSpent[0].cost),
                search:tempSearch,
                expenses:temp
            }
        case "seacrh_expense":
            const filteredItems=state.expenses.filter(item=>(item.name===action.payload))
            return{
                ...state,
                search:filteredItems
            }
        default:
            return state;
    }
}

const initialState={
    //the very beginning data
    budget:0,
    expenses:[],
    search:[],
    remaining:0,
    spent:0
}

export const BudgetContext = createContext();      //making context

export const BudgetProvider=(props)=>{
    //to provide the data to multiple element
    const [state, dispatch]=useReducer(BudgetReducer, initialState);

    return <BudgetContext.Provider 
                value={{budget:state.budget, 
                expenses:state.expenses, 
                search:state.search,
                remaining:state.remaining,
                spent:state.spent, 
                dispatch,}}
            >
                {props.children}
            </BudgetContext.Provider>
}

