import React from 'react';

const Input = ({ type = 'text', value, onChange, placeholder, id }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            id={id}
            className="input-field"
        />
    );
};

export default Input;