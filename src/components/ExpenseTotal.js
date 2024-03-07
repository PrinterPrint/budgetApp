import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const ExpenseTotal = () => {

  // reduce function to get a total of all the costs, assigning this to a variable and displaying the variable in your JSX.
  const {expenses} = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
  }, 0);
  return (
    <div className='alert alert-primary'>
        <span>Spent so far: £{totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
