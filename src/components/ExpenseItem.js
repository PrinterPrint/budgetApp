import React, {useContext} from 'react';
/*import {TiDelete} from 'react-icons/ti';*/
import {AppContext} from '../context/AppContext';
import { FaTimesCircle, FaCartPlus, FaCalendarMinus } from 'react-icons/fa';


// Here, you are dispatching an action.
// Your action contains the type (so the reducer knows how to update the state) and the payload.
// In this case you are passing the ID of this expense (which you get from props when you rendered the ExpenseList).


const ExpenseItem = (props) => {
    const {dispatch, Currency} = useContext(AppContext);
    const handleDeleteExpense = () => {
      dispatch({
          type: 'DELETE_EXPENSE',
          payload: props.id,
      });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10 //So I can add dynamically show the increased step number
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10 //So I can decrease dynamically show the decreased step number
        }

        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{Currency} {props.cost}</td>
            {/*<td><button onClick={event => increaseAllocation(props.name)}>(+)</button></td>*/}
            <td><FaCartPlus size='2.2em' color="green" onClick={event => increaseAllocation(props.name)} style={{ cursor: 'pointer' }}></FaCartPlus></td>
            {/*<td><button onClick={event => decreaseAllocation(props.name)}>(-)</button></td>*/}
            <td><FaCalendarMinus size='2.2em' color="blue" onClick={event => decreaseAllocation(props.name)} style={{ cursor: 'pointer' }}></FaCalendarMinus></td>
            {/*<td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>*/}
            <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteExpense} style={{ cursor: 'pointer' }}></FaTimesCircle></td>


        </tr>
    );
};
export default ExpenseItem;
