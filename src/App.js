/*
* 옛날 버전 import 방식
* import React from 'react';
* 모든 파일에 import문 추가 
*/

import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 394.67, date: new Date(2021, 2, 12) },
  { id: 'e2', title: 'AirPlane Insurance', amount: 10094.67, date: new Date(2031, 2, 12) },
  { id: 'e3', title: 'Boat Insurance', amount: 9394.67, date: new Date(2030, 2, 12) }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpenseHandler = (newExpense) => {

    const updateExpenses = (prevExpenses) => {
      return [
        newExpense,
        ...prevExpenses,
      ];
    };

    setExpenses(updateExpenses(expenses));
  };

  /*
   JSX 를 사용하지 않고 직접 구현하는 경우
  
   return React.createElement(
     'div',
     {},
     React.createElement('h2', {}, "Let's get started!"),
     React.createElement(Expenses, { items: expenses },),
   );
  */

  // App.js 에서 자식 컴포넌트를 생성하는 것이 아니라
  // addExpenseHandler 함수 자체를 onAddExpense 라는 속성으로
  // props에 담아서 자식 컴포넌트로 전달하고
  // 자식 컴포넌트에서 해당 props 내의 onAddExpense 속성을 통해
  // App.js 의 addExpenseHandler 함수를 사용한다.
  // 제일 하단의 ExpenseForm에 설정된 useState가 상위 컴포넌트로 단계적으로 연결
  return (
    <div className="App">
      <NewExpense addNewExpense={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
