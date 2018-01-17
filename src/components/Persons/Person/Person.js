import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Personnn.js inside constructor');
    }

    componentWillMount() {
        console.log('Personnnn.js inside componentWillMount');
    }

    componentDidMount() {
        console.log('Personnnn.js inside componentDidMount');
    }
    render () {
        console.log('Personnnn.js inside render');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}> Person name {this.props.name} and Person is {this.props.age} age</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;