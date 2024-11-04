import { FC, useState } from 'react';
import ProductCard from '../card/product-card.component';
import { ProductModel } from '../../../utils/product.model';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { selectProducts } from '../../../store/product/product.selectors';
import { removeProductAction, updateProductAction } from '../../../store/product/product.slice';
import ProductEditForm from '../../ProductEditForm';
import { addToCart } from '../../../store/cart/cart.slice';
import Cart from '../../cart/cart.component';

const ProductList: FC = () => {
    const dispatch = useDispatch();
    const products = useSelector<RootState, ProductModel[]>(selectProducts);
    const [editingProduct, setEditingProduct] = useState<ProductModel | null>(null);
    const cartProducts = useSelector((state: RootState) => state.cart.items);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleDelete = (id: number) => {
        dispatch(removeProductAction(id));
    };

    const handleAddToCart = (product: ProductModel) => {
        dispatch(addToCart(product));
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleEdit = (product: ProductModel) => {
        setEditingProduct(product);
    };

    const handleSave = (updatedProduct: ProductModel) => {
        dispatch(updateProductAction(updatedProduct));
    };

    return (
        <div>
            <button onClick={toggleCart}>Перейти в корзину ({cartProducts.length})</button>
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
            {isCartOpen && <Cart products={cartProducts} onClose={toggleCart} />}
        </div>
    );
};

export default ProductList;
