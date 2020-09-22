import React, {Component} from 'react';

class RadioButton extends Component {
    render() {
        const {name, colorButtonToggle, imageKeys=[], onRadioChange, currentColor} = this.props;
        const newImageKeys = [];
        newImageKeys[1] = currentColor;
        const tempImageKeys = imageKeys.filter(item => item !== currentColor);
        newImageKeys[0] = tempImageKeys[0];
        newImageKeys[2] = tempImageKeys[1];
        return (
            <div className="radio">
                <ul onClick={colorButtonToggle}>
                    {
                        newImageKeys.map((item,index) => {
                                return (
                                    <li key={index}>
                                        <label className="container">
                                            <input
                                                type="radio"
                                                onClick={(e) => onRadioChange(e)}
                                                value={item}
                                                name={`${name} radio`}/>
                                            <span style={{backgroundColor: item}} className="checkmark navyblue"/>
                                        </label>
                                    </li>
                                )
                            }
                        )
                    }

                </ul>
            </div>
        )
    }
}

export default RadioButton;