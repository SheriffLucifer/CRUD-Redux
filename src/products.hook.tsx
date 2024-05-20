import { useEffect } from 'react';
import { ProductModel } from './utils/product.model';
import { fetchProductsApi } from './services/product-api.service';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import { selectProducts } from './store/product/product.selectors';

const useProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector<RootState, ProductModel[]>(selectProducts);
    const loading = products.length === 0;

    useEffect(() => {
        if (loading) {
            dispatch(fetchProductsApi());
        }
    }, [dispatch, loading]);

    return { products, loading, error: '' };
};

export default useProducts;
