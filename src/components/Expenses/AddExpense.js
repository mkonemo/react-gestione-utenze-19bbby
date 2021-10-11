import React from 'react';

import Card from '../UI/Card';

import classes from './AddExpense.module.css';

const AddExpense = () => {
  const addExpenseHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addExpenseHandler}>
        <label htmlFor="date">Data</label>
        <input id="date" type="date" />
        <label htmlFor="amount">Importo (Euro)</label>
        <input id="amount" type="number" />
        <label htmlFor="description">Descrizione</label>
        <input id="description" type="text" />
        <label htmlFor="category">Categoria</label>
        <input id="category" type="text" />
        <label htmlFor="paid">Pagato</label>
        <input id="paid" type="checkbox" />
        <button type="submit">Aggiungi spesa</button>
      </form>
    </Card>
  );
};

export default AddExpense;
