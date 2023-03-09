import React, {useState} from "react";
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const expenses =props.items;
    const filteredExpenses = expenses.filter(e => e.date.getFullYear() === parseInt(filteredYear))

    const filterChangedHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
            <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )

}

export default Expenses;