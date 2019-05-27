import React , { Component } from 'react';


class SelectSize extends Component{
    render(){
        const {name,handleChange} = this.props;
        return(
            <select name={`${name} size`} onChange={handleChange}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
        )
    }
}

export default SelectSize;