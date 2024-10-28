import { FC, useState } from 'react';
import ProductCard from '../card/product-card.component';
import { ProductModel } from '../../../utils/product.model';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { selectProducts } from '../../../store/product/product.selectors';
import { removeProductAction, updateProductAction } from '../../../store/product/product.slice';
import ProductEditForm from '../../ProductEditForm';

const ProductList: FC = () => {
    const dispatch = useDispatch();
    const products = useSelector<RootState, ProductModel[]>(selectProducts);
    const [editingProduct, setEditingProduct] = useState<ProductModel | null>(null);

    const handleDelete = (id: number) => {
        dispatch(removeProductAction(id));
    };

    const handleEdit = (product: ProductModel) => {
        setEditingProduct(product);
    };

    const handleSave = (updatedProduct: ProductModel) => {
        dispatch(updateProductAction(updatedProduct));
    };

    return (
        <div>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    {...product}
                    onDelete={() => handleDelete(product.id as number)}
                    onEdit={() => handleEdit(product)}
                />
            ))}
            <ProductEditForm
                product={editingProduct || null}
                open={!!editingProduct}
                onClose={() => setEditingProduct(null)}
                onSave={handleSave}
            />
        </div>
    );
};

export default ProductList;
