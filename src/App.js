import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Task from './Task/Task';
import Radium, { StyleRoot } from 'radium';

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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                                name={person.name}
                                age={person.age} />
                        )
                    })}
                </div>
            );
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                    color: 'black'
            }
        }

        const classes = [];
        if(this.state.persons.length <= 2) {
            classes.push('red');
        }

        if(this.state.persons.length <= 1) {
            classes.push('bold');
        }



        return (
            <div className="App">
                <StyleRoot>
                    <h1>Hello!</h1>
                    <button
                        style={style}
                        onClick={() => this.togglePersonHandler()}>Toggle persons
                    </button>
                    <p className={classes.join(' ')}>Test style classes</p>
                    {persons}
                </StyleRoot>
            </div>
        );
    }
}

export default Radium(App);
