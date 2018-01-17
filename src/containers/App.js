import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'Vitalii', 'age': 25},
            {id: 2, name: 'Igor', 'age': 27}
        ],
        showPersons: false

    };

    deletePersonHandler = (personIndex) => {
        const persons = [ ...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons:persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }

    togglePersonHandler = () => {
        const isShown = this.state.showPersons;
        this.setState({showPersons: !isShown});
    }

    render() {

        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                        persons={this.state.persons} />;
        }

        return (
            <div className={classes.App}>
                <Cockpit clicked={this.togglePersonHandler}
                     persons={this.state.persons}
                     showPersons={this.state.showPersons} />
                {persons}
            </div>
        );
    }
}

export default App;
