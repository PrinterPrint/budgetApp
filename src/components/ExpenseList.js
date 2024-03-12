import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import {AppContext} from '../context/AppContext';

// Here, you are creating a list, using the map function to iterate over the expenses, and displaying an ExpenseItem component.

const ExpenseList = () => {
    const {expenses} = useContext(AppContext);
    //const increaseByValue = 10; // Define your Increase by value here or import from a central location

    return (
      <table className = 'table'>
          <thead className="thead-light">
              <tr>
                  <th scope="col">Department</th>
                  <th scope="col">Allocated Budget</th>
                  <th scope="col">Increase by {10}</th>
                  <th scope="col">Decrease by {10}</th>
                  <th scope="col">Delete</th>
              </tr>
          </thead>
          <tbody>
          { expenses.map((expense) =>(
              <ExpenseItem
                  id={expense.id}
                  key={expense.id}
                  name={expense.name}
                  cost={expense.cost}
                  //increaseBy = {increaseByValue} //Passed value to set the increase by 10, 20, ...

              />
          ))}
          </tbody>
      </table>
    );
};
export default ExpenseList;
