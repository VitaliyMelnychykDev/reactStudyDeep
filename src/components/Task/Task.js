import React, {Component} from 'react';
import Validation from './Validation/Validation';
import Char from "./char/Char";


class Task extends Component {
    state = {
        text: ''
    }

    changeTextHandler(event) {
        this.setState({
            text: event.target.value
        });
    }

    deleteSymbolHandler(index) {
        const symbols = this.state.text.split('');
        symbols.splice(index, 1);

        this.setState({text: symbols.join('')});
    }

    render(){

        let charList = this.state.text.split('').map((ch, index) => {
            return (
                <Char click={() => this.deleteSymbolHandler(index)}
                      symbol={ch}
                      key={index} />
            );
        });

        return (
            <div>
                <h2>Start Task Component</h2>

                <input type="text"
                       onChange={(event) => this.changeTextHandler(event)}
                       value={this.state.text} />
                <p>Text Length: {this.state.text.length}</p>
                <Validation textLength={this.state.text.length} />
                {charList}
                <h2>End Task Component</h2>
            </div>
        )
    }
}

export default Task;

