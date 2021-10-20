import React, { useState } from 'react';
import './style.css';

import AddExpense from './components/Expenses/AddExpense';
import ExpensesList from './components/Expenses/ExpensesList';

function App() {
  const [expensesList, setExpensesList] = useState([]);

  const addExpenseHandler = (eDate, eAmount, eDescription, eCategory) => {
    setExpensesList((prevExpensesList) => {
      return [
        ...prevExpensesList,
        {
          date: eDate,
          amount: eAmount,
          description: eDescription,
          category: eCategory,
        },
      ];
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
