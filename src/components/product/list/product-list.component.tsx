import { FC } from 'react';
import ProductCard from '../card/product-card.component';
import { ProductModel } from '../../../utils/product.model';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { selectProducts } from '../../../store/product/product.selectors';
import { removeProductAction, updateProductAction } from '../../../store/product/product.slice';

const ProductList: FC = () => {
    const dispatch = useDispatch();
    const products = useSelector<RootState, ProductModel[]>(selectProducts);

    const handleDelete = (id: number) => {
        dispatch(removeProductAction(id));
    };

    const handleEdit = (product: ProductModel) => {
        const updatedProduct = { ...product, title: 'Updated Title' };
        dispatch(updateProductAction(updatedProduct));
    };

    return (
        <div>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    {...product}
                    onDelete={() => handleDelete(product.id)}
                    onEdit={() => handleEdit(product)}
                />
            ))}
        </div>
    );
};

export default ProductList;
