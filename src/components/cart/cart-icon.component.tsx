import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import cart from '../../assets/icons/shopping_cart_brxhk98njtrd.svg';

type CartIconProps = {
    onClick: () => void;
};

const CartIcon: FC<CartIconProps> = ({ onClick }) => {
    const cartItemsCount = useSelector((state: RootState) =>
        state.cart.items.reduce((count, item) => count + item.quantity, 0)
    );

    return (
        <button
            style={{
                position: 'fixed',
                top: 10,
                left: 20,
                width: 50,
                cursor: 'pointer',
                background: 'aqua',
                padding: 8,
                borderRadius: 25,
                border: 'none',
                zIndex: 9999,
            }}
            onClick={onClick}
        >
            <img src={cart} alt='cart' />
            <span
                style={{
                    position: 'absolute',
                    bottom: 9,
                    right: 5,
                    background: 'white',
                    borderRadius: 50,
                    padding: 2,
                }}
            >
                {cartItemsCount}
            </span>
        </button>
    );
};

export default CartIcon;
