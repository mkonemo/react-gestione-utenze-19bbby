import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddExpense.module.css';

const AddExpense = () => {
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [checkedPaid, setCheckedPaid] = useState('false');

  const addExpenseHandler = (event) => {
    event.preventDefault( );
    console.log(enteredDate, enteredAmount, enteredDescription, enteredCategory, checkedPaid)
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  }

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  } 

  const paidCangeHandler = (event) => {
    setCheckedPaid(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addExpenseHandler}>
        <label htmlFor="date">Data</label>
        <input
          id="date"
          type="date"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
        <label htmlFor="amount">Importo (Euro)</label>
        <input
          id="amount"
          type="number"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
        <label htmlFor="description">Descrizione</label>
        <input
          id="description"
          type="text"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        />
        <label htmlFor="category">Categoria</label>
        <input
          id="category"
          type="text"
          value={enteredCategory}
          onChange={categoryChangeHandler}
        />
        <label htmlFor="paid">Pagato</label>
        <input
          id="paid"
          type="checkbox"
          value={checkedPaid}
          onChange={paidCangeHandler}
        />
        <Button type="submit">Aggiungi spesa</Button>
      </form>
    </Card>
  );
};

export default AddExpense;