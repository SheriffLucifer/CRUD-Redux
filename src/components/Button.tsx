import React from 'react';
import { StyledButton } from '../assets/styles/button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
    return <StyledButton className={className} {...props} />;
};

export default Button;
