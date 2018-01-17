import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Task from './Task/Task';

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
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <ErrorBoundary key={person.id} >
                                <Person
                                    click={() => this.deletePersonHandler(index)}
                                    changed={(event) => this.nameChangedHandler(event, person.id)}
                                    name={person.name}
                                    age={person.age} />
                            </ErrorBoundary>
                        )
                    })}
                </div>
            );
            btnClass = classes.Red;
        }

        const assignedClassed = [];
        if(this.state.persons.length <= 2) {
            assignedClassed.push(classes.red);
        }

        if(this.state.persons.length <= 1) {
            assignedClassed.push(classes.bold);
        }



        return (
            <div className={classes.App}>
                    <h1>Hello!</h1>
                    <button
                        className={btnClass}
                        onClick={() => this.togglePersonHandler()}>Toggle persons
                    </button>
                    <p className={assignedClassed.join(' ')}>Test style classes</p>
                    {persons}
            </div>
        );
    }
}

export default App;
