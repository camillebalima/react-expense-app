import React, {useState} from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpenseList.css'
import ExpensesFilter from "./ExpensesFilter";

const ExpenseList = (props) => {
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
                {filteredExpenses.map((expense) =>
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
                )}
            </Card>
        </div>
    )

}

export default ExpenseList;