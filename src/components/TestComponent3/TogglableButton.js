import React, { Component } from 'react';

export default class TogglableButton extends Component {
    state = {
            disabled: true,
        };

    handleClick() {
        const switchedState = !this.state.disabled;
        this.props.onToggle(switchedState);
        this.setState({ disabled: switchedState });
    }

    render() {
        return <div>
            {(() => {
                if(this.state.disabled) {
                    return <button onClick={this.handleClick}>Toggle</button>;
                }
                return <button onClick={this.handleClick}>Toggled</button>;
            })()}
        </div>;
    }
}