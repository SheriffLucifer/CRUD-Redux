import { FC, useState } from 'react';
import ProductCard from '../card/product-card.component';
import { ProductModel } from '../../../utils/product.model';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { selectProducts } from '../../../store/product/product.selectors';
import { removeProductAction, updateProductAction } from '../../../store/product/product.slice';
import ProductEditForm from '../../ProductEditForm';
import { addToCart } from '../../../store/cart/cart.slice';
import { useNavigate } from 'react-router-dom';
import AddToCartNotification from '../../AddToCartNotification';

const ProductList: FC = () => {
    const dispatch = useDispatch();
    const products = useSelector<RootState, ProductModel[]>(selectProducts);
    const [editingProduct, setEditingProduct] = useState<ProductModel | null>(null);
    const cartProducts = useSelector((state: RootState) => state.cart.items);
    const [notification, setNotification] = useState<string | null>(null);

    const navigate = useNavigate();

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
            <button onClick={() => navigate('/cart')}>Перейти в корзину ({cartProducts.length})</button>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    {...product}
                    onDelete={() => handleDelete(product.id as number)}
                    onEdit={() => handleEdit(product)}
                    onAddToCart={() => handleAddToCart(product)}
                />
            ))}
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
