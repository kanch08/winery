import React, { Component } from 'react';
import TogglableButton from './TogglableButton';

export default class TestComponent3 extends Component{
    state = {
            toggleDisabled: true,
        };

    handleToggle(switchedState) {
        this.setState({ toggleDisabled: switchedState });
    }
    render() {
        return <div>
            <TogglableButton onToggle={this.handleToggle}/>
            {(() => {
                if(this.state.toggleDisabled) {
                    return <div id="toggle">ToggleDisabled</div>;
                }
                return <div id="toggle">ToggleEnabled</div>;
            })()}
        </div>
    }
}