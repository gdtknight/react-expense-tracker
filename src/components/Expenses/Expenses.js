import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const expenses = filteredExpenses.map((expense) =>
    <ExpenseItem
      key={expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  );


  return (
    <div>
      <Card className="expenses">
        <div className="filter">
          <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
        </div>
        {expenses}
      </Card>
    </div>
  );
}

export default Expenses;
