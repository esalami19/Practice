
//using destructuring for email input field

import React, { useState } from 'react';

export default function ControlledComponent() {
    const [inputValue, setInputValue] = useState('');
    const [mailValue, setMailValue] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'inputValue') {
            setInputValue(value);
        } else if (name === 'mailValue') {
            setMailValue(value);
        }
    };

    return (
        <form>
            <label>Input Value:
                <input type="text" name="inputValue" value={inputValue} onChange={handleChange} />
            </label>
            <p>Input Value: {inputValue}</p>
            <label>Email:
                <input type="email" name="mailValue" value={mailValue} onChange={handleChange} />
            </label>
        </form>
    );
}

//way of identifying each field to update the state accordingly for input field and email like above without destructuring.
const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === 'inputValue') {
        setInputValue(inputValue);
    } else if (inputName === 'mailValue') {
        setMailValue(inputValue);
    }
};