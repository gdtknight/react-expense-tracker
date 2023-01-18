import ExpenseItem from './componenets/ExpenseItem';

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 394.67, date: new Date(2021, 2, 12) },
    { id: 'e2', title: 'AirPlane Insurance', amount: 10094.67, date: new Date(2031, 2, 12) },
    { id: 'e3', title: 'Boat Insurance', amount: 9394.67, date: new Date(2030, 2, 12) }
  ];
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
    </div>
  );
}

export default App;
