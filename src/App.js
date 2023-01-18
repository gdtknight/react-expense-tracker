/*
* 옛날 버전 import 방식
* import React from 'react';
* 모든 파일에 import문 추가 
*/
import Expenses from './components/Expenses/Expenses';


const App = () => {

  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 394.67, date: new Date(2021, 2, 12) },
    { id: 'e2', title: 'AirPlane Insurance', amount: 10094.67, date: new Date(2031, 2, 12) },
    { id: 'e3', title: 'Boat Insurance', amount: 9394.67, date: new Date(2030, 2, 12) }
  ];

  /*
   JSX 를 사용하지 않고 직접 구현하는 경우

   return React.createElement(
     'div',
     {},
     React.createElement('h2', {}, "Let's get started!"),
     React.createElement(Expenses, { items: expenses },),
   );
  */

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
