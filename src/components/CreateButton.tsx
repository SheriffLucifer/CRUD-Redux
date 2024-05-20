import React from 'react';
import { Button } from '../assets/styles/createButton.styles';

type CreateButtonProps = {
    onClick: () => void;
};

const CreateButton: React.FC<CreateButtonProps> = ({ onClick }) => {
    return <Button onClick={onClick}>+</Button>;
};

export default CreateButton;
