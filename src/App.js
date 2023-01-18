import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 394.67, date: new Date(2021, 2, 12) },
    { id: 'e2', title: 'AirPlane Insurance', amount: 10094.67, date: new Date(2031, 2, 12) },
    { id: 'e3', title: 'Boat Insurance', amount: 9394.67, date: new Date(2030, 2, 12) }
  ];
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
