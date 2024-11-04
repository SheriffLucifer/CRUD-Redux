import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './cart-item.component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ProductModel } from '../../utils/product.model';
import { clearCart } from '../../store/cart/cart.slice';

type CartProps = {
    products: ProductModel[];
    onClose: () => void;
};

const Cart: React.FC<CartProps> = ({ products, onClose }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return ReactDOM.createPortal(
        <div
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: 300,
                height: '100%',
                background: 'greenyellow',
                padding: 20,
                boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                overflowY: 'auto',
                scrollbarWidth: 'none',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 style={{ margin: '0 0 20px' }}>Cart</h2>
                <button
                    onClick={onClose}
                    style={{
                        marginBottom: 20,
                        border: 'none',
                        background: 'greenyellow',
                        fontSize: 20,
                        cursor: 'pointer',
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
                <h3 style={{ margin: '20px 0 0' }}>Total Amount: {totalAmount}$</h3>
                <button
                    style={{ border: 'none', background: 'greenyellow', cursor: 'pointer', marginTop: 20 }}
                    onClick={() => dispatch(clearCart())}
                >
                    Clear
                </button>
            </div>
        </div>,
        document.body
    );
};

export default Cart;
