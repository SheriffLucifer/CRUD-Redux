import React from 'react';
import { RemoveButton } from '../assets/styles/deleteButton.styles';

type DeleteButtonProps = {
    onClick: () => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
    return <RemoveButton onClick={onClick}></RemoveButton>;
};

export default DeleteButton;
