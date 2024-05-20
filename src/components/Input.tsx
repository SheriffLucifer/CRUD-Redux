import React, { useState } from 'react';
import { StyledInput } from '../assets/styles/input.styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className, value, defaultValue, onChange, ...rest }) => {
    const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value);
        if (onChange) onChange(e);
    };

    return <StyledInput value={innerValue} onChange={handleChange} className={className} {...rest} />;
};

export default Input;
