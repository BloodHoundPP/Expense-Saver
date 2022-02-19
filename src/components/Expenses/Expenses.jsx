import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import './Expenses.css'
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [selectedYear , setSelectedYear ] = useState('2022');
    const changeFilterHandler = (selectedFilter) => {
        setSelectedYear(selectedFilter);
    }
    const filteredChange = props.expenses.filter(
        (expense) => {
            const year = expense.date.getFullYear().toString();
            return year === selectedYear;
        }
    )
    return (
        <div >
            <Card className="expenses">
                <ExpenseChart expenses = {filteredChange}/>
                <ExpensesFilter selected={selectedYear} onChangeFilter={changeFilterHandler}/>
                <ExpenseList filteredChange = {filteredChange}/>
            </Card>
        </div>
        
    )
}
export default Expenses;