import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  
];
function App() {
  const [expenses,setExpenses] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses( (preExpenses) => {
      return [
        expense,...preExpenses
      ]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
