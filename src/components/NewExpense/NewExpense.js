import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

  // const [clicked, setClicked] = useState(false);

  // const clickButtonHandler = (clicked) => {
  //   setClicked(clicked);
  // };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    }
    // console.log(expenseData);
    props.addNewExpense(expenseData);
    setIsEditing(false);
  };

  // let showForm = <button onClick={clickButtonHandler}>Add New Expense</button>;

  // if (clicked) {
  //   showForm = <ExpenseForm onClicked={clickButtonHandler} onSaveExpenseData={saveExpenseDataHandler} />;
  // };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );

}

export default NewExpense;
