import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {

  const expenseItems = props.items.map((item) =>
    <ExpenseItem
      key={item.id}
      date={item.date}
      title={item.title}
      amount={item.amount}
    />
  );

  const [selectedYear, setSelectedYear] = useState('');

  const selectedYearHandler = (choice) => {
    setSelectedYear(choice);
    // console.log(choice);
  }

  // console.log("selectedYear : " + selectedYear);

  return (
    <div className="expenses">
      <div className="filter">
        <ExpensesFilter onSelectYear={selectedYearHandler} />
      </div>
      {expenseItems}
    </div>
  );
}

export default Expenses;
