import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const initialExpenses = [
    {
      id: 1,
      title: "Home Insurance",
      amount: 247.2,
      date: new Date(2020, 7, 7),
    },
    { id: 2, title: "Car Loan", amount: 127.25, date: new Date(2021, 6, 27) },
    {
      id: 3,
      title: "Stock Purchase",
      amount: 97.22,
      date: new Date(2020, 3, 11),
    },
    { id: 4, title: "Ornaments", amount: 47.7, date: new Date(2021, 4, 7) },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
