import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

  const [clicked, setClicked] = useState(false);

  const clickButtonHandler = (clicked) => {
    setClicked(clicked);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    }
    // console.log(expenseData);
    props.addNewExpense(expenseData);
  };

  let showForm = <button onClick={clickButtonHandler}>Add New Expense</button>;

  if (clicked) {
    showForm = <ExpenseForm onClicked={clickButtonHandler} onSaveExpenseData={saveExpenseDataHandler} />;
  };

  return (
    <div className="new-expense">
      {showForm}
    </div>
  );

}

export default NewExpense;
