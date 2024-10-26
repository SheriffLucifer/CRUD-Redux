import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@mui/material';

type ImageModalProps = {
    open: boolean;
    image: string;
    title: string;
    onClose: () => void;
};

const ImageModal: FC<ImageModalProps> = ({ open, image, title, onClose }) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1300,
            }}
            onClick={onClose}
        >
            <img src={image} alt={title} style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </Box>,
        document.body
    );
};

export default ImageModal;
