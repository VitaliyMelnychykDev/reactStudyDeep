import React from 'react';
import {Char as Styles} from './Char.css';

const Char = (props) => {
    return (
        <div onClick={props.click} className='char-element'>{props.symbol}</div>
    );
}

export default Char;