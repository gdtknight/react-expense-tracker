import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  let id = 1;
  const expenseItems = props.items.map((item) =>
    <ExpenseItem
      key={id++}
      date={item.date}
      title={item.title}
      amount={item.amount}
    />
  );

  return (
    <div className="expenses">
      {expenseItems}
    </div>
  );
}

export default Expenses;
