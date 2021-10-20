import React from 'react';

import Card from '../UI/Card';

import classes from './ExpensesList.module.css';

const ExpensesList = (props) => {
  return (
    <Card className={classes.expenses}>
      <table width="100%">
        {props.expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.date}</td>
            <td>{expense.amount}€</td> <td>{expense.description}</td>
            <td>{expense.category}</td>
          </tr>
        ))}
      </table>
    </Card>
  );
};

export default ExpensesList;
