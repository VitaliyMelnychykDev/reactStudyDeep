import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('Persons.js inside constructor');
    }

    componentWillMount() {
        console.log('Persons.js inside componentWillMount');
    }

    componentDidMount() {
        console.log('Persons.js inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Persons.js inside componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons.js inside shouldComponentUpdate', nextProps, nextState);

        return (nextProps.persons !==  this.props.persons);
        //return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Persons.js inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('Persons.js inside componentDidUpdate');
    }

    render () {
        console.log('Persons.js inside render');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    position={index}
                    key={person.id}
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                    name={person.name}
                    age={person.age}/>
            )
        });
    }
}

export default Persons;