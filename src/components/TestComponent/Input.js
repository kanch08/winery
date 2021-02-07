import React from 'react';

const Input = props => {
    const {type, text, handleChange } = props;
        return (
            <div>
                <input
                    type={type}
                    placeholder={text}
                    onChange={handleChange}
                />
            </div>
        );
}
export default Input;

