import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const expenseItems = props.items.map((item) =>
    <ExpenseItem
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
