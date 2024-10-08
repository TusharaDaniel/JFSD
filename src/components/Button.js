import React from 'react';

const Button = ({ text, onClick, disabled, type = 'button' }) => {
    return (
        <button type={type} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
