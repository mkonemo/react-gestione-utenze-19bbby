import React from "react";
import "./style.css";

import AddExpense from './components/Expenses/AddExpense'

export default function App() {
  return (
    <div>
      <h1>Spese utenze</h1>
      <AddExpense />
    </div>
  );
}
