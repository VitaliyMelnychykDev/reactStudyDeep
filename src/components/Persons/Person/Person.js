import React, {Component} from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

import PropTypes from 'prop-types';

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

    render() {
        console.log('Personnnn.js inside render');
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}> Person name {this.props.name} and Person is {this.props.age} age</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </WithClass>
        );
        /*return [
            <p key="1" onClick={this.props.click}> Person name {this.props.name} and Person is {this.props.age} age</p>,
            <p key="2" >{this.props.children}</p>,
            <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
        ]*/
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    chnaged: PropTypes.func
};

export default Person;