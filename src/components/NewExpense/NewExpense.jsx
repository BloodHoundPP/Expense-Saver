import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [clicked, setClicked] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setClicked(false);
    }
    const clickHandle = () => {
        setClicked(true);
    }
    const closeHandle = () => {
        setClicked(false);
    }
    return (
        <div className="new-expense">
            {!clicked && <button type="submit" onClick={clickHandle}>Add Expense</button>}
            
            {clicked === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onSendBack={closeHandle}/>}
        </div>
    )
}

export default NewExpense;