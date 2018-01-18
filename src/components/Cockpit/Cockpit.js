import React from 'react';
import classes from './Cockpit.css';
import Aox from '../../hoc/Aox';

const Cockpit = (props) => {

    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }


    const assignedClassed = [];
    if(props.persons.length <= 2) {
        assignedClassed.push(classes.red);
    }

    if(props.persons.length <= 1) {
        assignedClassed.push(classes.bold);
    }

    return (
        <Aox>
            <h1>{props.appTitle}</h1>
            <button
                className={btnClass}
                onClick={() => props.clicked()}>Toggle persons
            </button>
            <p className={assignedClassed.join(' ')}>Test style classes</p>
        </Aox>
    );
}

export default Cockpit;