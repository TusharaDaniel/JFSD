import React from 'react';

const FormInput = ({ label, type, value, onChange, placeholder, errorMessage }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {errorMessage && <small className="error">{errorMessage}</small>}
        </div>
    );
};

export default FormInput;
    