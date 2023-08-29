import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext'

const Budget = () => {
    const {expenses, dispatch, currency} = useContext(AppContext);

    const [budgetInput, setBudget] = useState('');

    const handleChange = (event) => {
        setBudget(event.target.value);
    }

    const handleSubmit = () => {
        const newBudget = parseInt(budgetInput);
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if (newBudget > 20000) {
            alert('Maximum budget is 20000');
            setBudget(20000);
        } else if (newBudget < totalExpenses) {
            alert('Budget too low for current expenses');
            setBudget(totalExpenses);
        } 
        dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    type='number'
                    id='budgetInput'
                    defaultValue='2000'
                    value={budgetInput}
                    max='20000'
                    step='10'
                    onChange = {handleChange}
                    onBlur = {handleSubmit}
                />
            </span>
        </div>
    );
};

export default Budget;
