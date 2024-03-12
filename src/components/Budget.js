import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';


const Budget = () => {
    const {budget, expenses, dispatch, Currency} = useContext(AppContext);
    // we are using the useState hook to create a state variable called newBudget and initialize it with the current value of budget.
    const [newBudget, setNewBudget] = useState(budget);

    // handleBudgetChange that updates the value of newBudget when the user changes the value of the input field
    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);
        if (updatedBudget >= getTotalSpending() && updatedBudget <= 20000) {
        setNewBudget(updatedBudget);
        // Dispatch an action to update the budget in the global state
        dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
        } else {
            // Display appropriate alert messages based on the validation results
            if (updatedBudget < getTotalSpending()) {
                alert("Cannot reduce budget below total spending!");
            } else {
                alert("The maximum limit is 20k.");
            }
        }
    };

    const getTotalSpending = () => {
        return expenses.reduce((total, item) => total + item.cost, 0);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency} {budget} </span>
            <input type="number"
                   step="10"
                   value={newBudget}
                   onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
