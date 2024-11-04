import { FC } from 'react';
import { ProductModel } from '../../utils/product.model';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart/cart.slice';

interface CartItemProps {
    item: ProductModel & { quantity: number };
}

const CartItem: FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        if (item.id) {
            dispatch(removeFromCart(item.id));
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
                backgroundColor: 'gray',
                padding: '0 10px',
                borderRadius: 15,
            }}
            key={item.id}
        >
            <img style={{ width: 50, height: 50, marginRight: 10 }} src={item.image} alt={item.title} />
            <div style={{ flex: 1, fontSize: 10 }}>
                <h3>{item.title}</h3>
                <p>
                    Quantity: {item.quantity}pcs X {item.price}$
                </p>
                <p>Total amount: {(item.price * item.quantity).toFixed(2)}$</p>
            </div>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default CartItem;
