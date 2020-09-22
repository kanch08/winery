import React, {Component} from 'react';

class Lifecycle extends Component {
    componentWillMount() {
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("called", cwrp);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("called", cdu);
    }

    render() {
        return (
            <div>
               Hello This is to test the lifecycle methods of react
               Thank you.!
            </div>
        );
    }
}

export default Lifecycle;