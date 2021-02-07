import React from 'react';

class Toggle extends React.Component {
    state = { toggled: false };

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ toggled: !this.state.toggled });
    }

    render() {
        const { toggled } = this.state;

        return (
            <button onClick={this.toggle}>
                {toggled ? 'Toggled' : 'Toggle'}
            </button>
        )
    }
}

export default Toggle;
