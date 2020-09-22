import React, { Component } from 'react';
import Input from './Input'

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, name: ''};
    }

    handleChange = (e) => {
        console.log("e", e.target);
        this.setState({name: e.target.value});
    }

    render() {
        const {name} = this.state;
        console.log("name", name)
        return (
            <React.Fragment>
                <h3>{this.state.count}</h3>
                <span>
        <button id="count-up" type="button" onClick={() => this.setState({count: this.state.count + 1})}>
          Count Up!
        </button>
        <button id="count-down" type="button" onClick={() => this.setState({count: this.state.count - 1})}>
          Count Down!
        </button>
        <button id="zero-count" type="button" onClick={() => this.setState({count: 0})}>Zero</button>
      </span>
                <Input
                    type="text"
                    placeholder="enter your name"
                    value={name}
                    onChange={(e) => this.handleChange(e)}
                    />
            </React.Fragment>
        )
    }
}

export default TestComponent;