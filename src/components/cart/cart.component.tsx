import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './cart-item.component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { clearCart } from '../../store/cart/cart.slice';

const Cart: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return ReactDOM.createPortal(
        <div
            style={{
                position: 'fixed',
                top: 70,
                right: 10,
                background: 'white',
                padding: 20,
                zIndex: 1001,
                maxWidth: 240,
                maxHeight: '80%',
                overflowY: 'auto',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 style={{ margin: '0 0 20px' }}>Cart</h2>
                <button
                    onClick={onClose}
                    style={{
                        marginBottom: 20,
                        border: 'none',
                        background: 'violet',
                        fontSize: 10,
                        cursor: 'pointer',
                        borderRadius: '50%',
                    }}
                >
                    Close
                </button>
            </div>
            <div>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 20 }}>
                <h3 style={{ margin: '20px 0 0', fontSize: 25 }}>Total: {totalAmount}$</h3>
                <button
                    style={{ border: 'none', background: 'aqua', cursor: 'pointer', margin: '20px 0 0 20px' }}
                    onClick={handleClearCart}
                >
                    Clear
                </button>
            </div>
        </div>,
        document.body
    );
};

export default Cart;
