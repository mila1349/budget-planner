import './App.css';
import Budget from './Budget'
import Remaining from './Remaining'
import Spent from './Spent'
import Add from './Add'
import Expenses from './Expenses'
import {BudgetProvider} from './BudgetContext'

function App() {
  return (
    <>
    <BudgetProvider>
      <div className="app">
        <h1>My Budget Planner</h1>
        <div className="flex">
          <Budget/>
          <Remaining/>
          <Spent/>
        </div>
        <Add/>
        <Expenses/>
      </div>
    </BudgetProvider>
    </>
  );
}

export default App;
