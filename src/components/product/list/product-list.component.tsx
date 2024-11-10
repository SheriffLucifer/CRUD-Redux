import { FC, useState } from 'react';
import ProductCard from '../card/product-card.component';
import { ProductModel } from '../../../utils/product.model';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { selectProducts } from '../../../store/product/product.selectors';
import { removeProductAction, updateProductAction } from '../../../store/product/product.slice';
import ProductEditForm from '../../ProductEditForm';
import { addToCart } from '../../../store/cart/cart.slice';
import AddToCartNotification from '../../AddToCartNotification';
import CartIcon from '../../cart/cart-icon.component';
import Cart from '../../cart/cart.component';

const ProductList: FC = () => {
    const dispatch = useDispatch();
    const products = useSelector<RootState, ProductModel[]>(selectProducts);
    const [editingProduct, setEditingProduct] = useState<ProductModel | null>(null);
    const [notification, setNotification] = useState<string | null>(null);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleDelete = (id: number) => {
        dispatch(removeProductAction(id));
    };

    const handleAddToCart = (product: ProductModel) => {
        dispatch(addToCart(product));
        setNotification(`${product.title} добавлен в корзину`);
    };

    const closeNotification = () => {
        setNotification(null);
    };

    const handleEdit = (product: ProductModel) => {
        setEditingProduct(product);
    };

    const handleSave = (updatedProduct: ProductModel) => {
        dispatch(updateProductAction(updatedProduct));
    };

    return (
        <div>
            <CartIcon onClick={toggleCart} />
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    {...product}
                    onDelete={() => handleDelete(product.id as number)}
                    onEdit={() => handleEdit(product)}
                    onAddToCart={() => handleAddToCart(product)}
                />
            ))}
            {isCartOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000,
                    }}
                ></div>
            )}
            {isCartOpen && <Cart onClose={toggleCart} />}
            <ProductEditForm
                product={editingProduct || null}
                open={!!editingProduct}
                onClose={() => setEditingProduct(null)}
                onSave={handleSave}
            />
            {notification && <AddToCartNotification message={notification} onClose={closeNotification} />}
        </div>
    );
};

export default ProductList;
