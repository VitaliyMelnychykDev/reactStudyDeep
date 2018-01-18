import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import WithClass from '../hoc/WithClass';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App.js inside constructor');

        this.state = {
            persons: [
                {id: 1, name: 'Vitalii', 'age': 25},
                {id: 2, name: 'Igor', 'age': 27}
            ],
            showPersons: false

        };
    }

    componentWillMount() {
        console.log('App.js inside componentWillMount');
    }

    componentDidMount() {
        console.log('App.js inside componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('App.js inside shouldComponentUpdate', nextProps, nextState);

        return nextState.persons !== this.state.persons
            || nextState.showPersons !== this.state.showPersons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('App.js inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('App.js inside componentDidUpdate');
    }

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
        console.log('App.js inside render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                        persons={this.state.persons} />;
        }

        return (
            <WithClass classes={classes.App} >
                <button onClick={() => {this.setState({showPersons: true})}} >Show Persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    clicked={this.togglePersonHandler}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons} />
                {persons}
            </WithClass>
        );
    }
}

export default App;
