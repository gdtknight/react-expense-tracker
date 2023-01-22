import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const expenseItems = props.items.map((item) =>
    <ExpenseItem
      key={item.id}
      date={item.date}
      title={item.title}
      amount={item.amount}
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
        {expenseItems}
      </Card>
    </div>
  );
}

export default Expenses;
