import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const expenses = props.expenses.map((expense) =>
    <ExpenseItem
      key={expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

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
