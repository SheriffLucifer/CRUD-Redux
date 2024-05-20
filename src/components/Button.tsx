import React from 'react';
import { StyledButton } from '../assets/styles/button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
    return <StyledButton className={className} {...rest} />;
};

export default Button;
