import React from "react";
import ExpenseItems from "./ExpenseItems";
import './ExpenseList.css';

const ExpenseList = (props) => {
    // {filteredChange.length === 0 && <p>No item found</p>}
    if(props.filteredChange.length === 0){
        return (
            <h2 className="expenses-list__fallback">Found no expenses.</h2>
        )
    }
                
    return (
        <ul className="expenses-list">
            <li>
                {props.filteredChange.length !== 0 && props.filteredChange.map((data) => {
                    return <ExpenseItems
                        key = {data.id}
                        title = {data.title}
                        amount = {data.amount}
                        date = {data.date}
                    />
                })}
            </li>
        </ul>
    )
}

export default ExpenseList;