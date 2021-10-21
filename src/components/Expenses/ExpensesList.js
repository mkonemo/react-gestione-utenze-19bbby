import React from 'react';

import Card from '../UI/Card';

import classes from './ExpensesList.module.css';

const ExpensesList = (props) => {

 

  return (
    <Card className={classes.expenses}>
      
        {props.expenses.map((expense) => (
           
          <div className={classes.expense} key={expense.id}>
            <div>{expense.date.toLocaleString('it-IT').split(',')[0]}</div>
            <div><strong>{expense.amount}€</strong></div>
            <div>{expense.description}</div>
            <div>{expense.category}</div>
          </div>
        ))}
      
    </Card>
  );
};

export default ExpensesList;
