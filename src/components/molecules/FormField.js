import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const FormField = ({ label, type, name, value, onChange, required }) => {
    return (
        <div className="form-field">
            <Label text={label} htmlFor={name} />
            <Input 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange} 
                required={required} 
            />
        </div>
    );
};

export default FormField;