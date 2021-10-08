import React from 'react';

const AddExpense = () => {
  return (
    <form>
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
  );
};

export default AddExpense;
