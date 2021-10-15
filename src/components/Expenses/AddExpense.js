import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddExpense.module.css';

const AddExpense = () => {
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [checkedPaid, setCheckedPaid] = useState(false);
  const [errorMessage, setErroMessage] = useState('');

  const addExpenseHandler = (event) => {
    event.preventDefault();

    if (enteredDate.trim().length===0 || enteredAmount.trim().length===0 || enteredDescription.trim().length===0 || enteredCategory.trim().length===0 ) {
      setErroMessage('I valori inseriti non sono validi');
      return;
      
    }
    console.log(
      enteredDate,
      enteredAmount,
      enteredDescription,
      enteredCategory,
      checkedPaid
    );
    setEnteredDate('');
    setEnteredAmount('');
    setEnteredDescription('');
    setEnteredCategory('');
    setCheckedPaid(false);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const paidCangeHandler = (event) => {
    setCheckedPaid(!checkedPaid);
  };

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
          onClick={paidCangeHandler}
        />
        <Button type="submit">Aggiungi spesa</Button>
      </form>
      <p className="error-message">{errorMessage}</p> 
    </Card>
  );
};

export default AddExpense;
