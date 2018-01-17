import React from 'react';
import {Validation as Styles} from './Validation.css'

const Validation = (props) => {
    const minLength = 5;
    const maxLength = 20;
    let errorText = '';
    if (props.textLength < minLength) {
        errorText = (
            <p className='text-error'>Text min length is {minLength}</p>
        );
    } else if (props.textLength > maxLength) {
        errorText = (
            <p className='text-error'>Text max length is {maxLength}</p>
        );
    }

    return (
        <div>{errorText}</div>
    );
}

export default Validation;