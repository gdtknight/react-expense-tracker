import React, { useState } from 'react';
import './ExpenseItem.css';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  // function clickHandler() {}

  /*
  *  useState : react hook, 반드시 component 함수 안에서 실행되어야 한다 (위치 중요)
  * (한가지 예외 존재. 추후에 학습)
  *
  *  useState 는 항상 2개의 요소를 가지는 배열을 반환한다.
  *  첫번째 값 : current state value
  *  두번째 값 : 첫번째 값을 업데이트하는 함수
  */

  const [title, setTitle] = useState(props.title);

  /*
  * 상위 컴포넌트인 Expenses 에서 각각의 ExpenseItem을 생성할 때마다
  * useState는 각각 독립적으로 생성되고 관리되므로
  * 특정 ExpenseItem의 title이 변경되어도 다른 ExpenseItem은 영향을 받지 않는다.
  */
  // console.log('ExpenseItem evaluated by React')

  const clickHandler = () => {
    setTitle('Updated!');
    // setTitle이 호출되는 순간 바로 업데이트 되는 것이 아니라
    // 업데이트가 예약됨.
    // 따라서 로그에 찍히는 값은 Updated! 로 변경되기 전 props.title 값 이 출력된다.
    // console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        < div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div >
        {/* 모든 'on' props 는 함수를 실행해야 함. */}
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
