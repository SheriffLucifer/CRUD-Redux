import React, { FC } from 'react';
import ProductCard from '../card/product-card.component';
import { ProductModel } from '../../../utils/product.model';

type ProductListProps = {
    products: ProductModel[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
