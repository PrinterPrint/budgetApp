import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// In Currency.js, you are importing AppContext and adding changeLocation class to change the location along with its currencies.
// When you change the Currency, currencies will be updated at all the required places.

const Currency = () => {
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
    };

    return (
        <div className='alert alert-secondary'> Currency {
            <select style={{ backgroundColor: 'green', color: 'white' }} name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)}>
                <option value="£" style={{ backgroundColor: 'green', color: 'white' }}>Uk (£)</option>
                <option value="₹" style={{ backgroundColor: 'green', color: 'white' }}>India (₹)</option>
                <option value="€" style={{ backgroundColor: 'green', color: 'white' }}>Europe (€)</option>
                <option value="CAD" style={{ backgroundColor: 'green', color: 'white' }}>Canada (CAD)</option>
            </select>
        }
        </div>

    );
};

export default Currency;