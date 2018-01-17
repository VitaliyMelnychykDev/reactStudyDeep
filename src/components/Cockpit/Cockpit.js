import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }


    const assignedClassed = [];
    if(props.persons.length <= 2) {
        assignedClassed.push(classes.red);
    }

    if(props.persons.length <= 1) {
        assignedClassed.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <button
                className={btnClass}
                onClick={() => props.clicked()}>Toggle persons
            </button>
            <p className={assignedClassed.join(' ')}>Test style classes</p>
        </div>
    );
}

export default Cockpit;