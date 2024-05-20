import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    background-color: white;
    border-radius: 8px;
    width: 400px;
    max-width: 90%;
    padding: 20px;
    position: relative;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    margin: 0;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;
