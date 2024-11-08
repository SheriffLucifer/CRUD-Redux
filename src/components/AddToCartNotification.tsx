import { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Notification } from '../assets/styles/notification.style';

interface AddToCartNotificationProps {
    message: string;
    onClose: () => void;
}

const AddToCartNotification: FC<AddToCartNotificationProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return ReactDOM.createPortal(
        <Notification>
            <p>{message}</p>
        </Notification>,
        document.body
    );
};

export default AddToCartNotification;
