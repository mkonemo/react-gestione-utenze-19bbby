import React, { useState } from 'react';
import './style.css';

import AddExpense from './components/Expenses/AddExpense';
import ExpensesList from './components/Expenses/ExpensesList';

function App() {
  const [expensesList, setExpensesList] = useState([]);

  const addExpenseHandler = (eDate, eDescription) => {
    setExpensesList((prevExpensesList) => {
      return [...prevExpensesList, { date: eDate, description: eDescription }];
    });
  };

  return (
    <div>
      <h1>Spese utenze</h1>
      <AddExpense onAddExpense={addExpenseHandler} />
      <ExpensesList expenses={expensesList}></ExpensesList>
    </div>
  );
}

export default App;
