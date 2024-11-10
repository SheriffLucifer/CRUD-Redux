import styled from 'styled-components';
import removeIcon from '../icons/delete-svgrepo-com.svg';

export const RemoveButton = styled.img.attrs({
    src: removeIcon,
})`
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;
