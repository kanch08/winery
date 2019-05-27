import React, {Component} from 'react';

class Tooltip extends Component {
    render() {
        return (
            <div className="tooltip">
                <p>Quantity must not be greater than 10</p>
            </div>
        );
    }
}

export default Tooltip;