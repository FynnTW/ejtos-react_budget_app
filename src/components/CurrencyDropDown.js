import React, { useContext, useState } from 'react'
import {AppContext} from '../context/AppContext'

const CurrencyDropDown = () => {
    const {dispatch} = useContext(AppContext);

    const handleChange = (event) => {
        const selectedCurrency = event.target.value;
        let CurrSymbol = selectedCurrency;
        switch(selectedCurrency) {
            case "dollar":
                CurrSymbol = "$";
                break;
            case "pound":
                CurrSymbol = "£";
                break;
            case "euro":
                CurrSymbol = "€";
                break;
            case "ruppee":
                CurrSymbol = "₹";
                break;
        }
        dispatch({
            type: 'CHG_CURRENCY',
            payload: CurrSymbol,
        });
    }

    return (
        <div>
            <select 
            name="currency" 
            id='currency'
            style={{
                background: 'lightgreen',
                color: 'black',
                size: '50em'
            }}
            onChange={handleChange}
            >
                <option value='dollar'>$ Dollar</option>
                <option value='pound'>£ Pound</option>
                <option value='euro'>€ Euro</option>
                <option value='ruppee'>₹ Ruppee</option>
            </select>
        </div>
    )
}

export default CurrencyDropDown;