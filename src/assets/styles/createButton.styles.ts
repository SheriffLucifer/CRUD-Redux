import styled from 'styled-components';

export const Button = styled.button`
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #007bff;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
