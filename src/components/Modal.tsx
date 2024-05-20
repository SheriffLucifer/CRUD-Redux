import React, { ReactNode } from 'react';
import { ReactComponent as CloseIcon } from '../assets/icons/cross.svg';
import { CloseButton, Header, ModalContainer, Overlay, Title } from '../assets/styles/modal.styles';

type ModalProps = {
    title: string;
    visible: boolean;
    onClose: () => void;
    children?: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ title, visible, onClose, children }) => {
    if (!visible) return null;

    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <Header>
                    <Title>{title}</Title>
                    <CloseButton onClick={onClose}>
                        <CloseIcon width='20' height='20' />
                    </CloseButton>
                </Header>
                {children}
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;
