import React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { VisuallyHiddenInput } from '../assets/styles/uploadModal.styles';

type UploadButtonProps = {
    onFileUpload: (file: File | null) => void;
};

const UploadButton: React.FC<UploadButtonProps> = ({ onFileUpload }) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        onFileUpload(file);
    };

    return (
        <Button component='label' variant='contained' tabIndex={-1} startIcon={<CloudUploadIcon />}>
            Upload photo
            <VisuallyHiddenInput type='file' onChange={handleFileChange} />
        </Button>
    );
};

export default UploadButton;
