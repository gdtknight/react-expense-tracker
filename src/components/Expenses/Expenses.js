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

  return (
    <div className="expenses">
      {expenseItems}
    </div>
  );
}

export default Expenses;
