import React from 'react';

import Card from '../UI/Card';

import classes from './ExpensesList.module.css';

const ExpensesList = (props) => {
  return (
    <Card className={classes.expenses}>
      <ul>
        {props.expenses.map((expense) => (
          <li key={expense.id}>
            {expense.date} {expense.description}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default ExpensesList;