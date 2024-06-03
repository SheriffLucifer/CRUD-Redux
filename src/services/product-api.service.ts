import axios from 'axios';
import { ProductModel } from '../utils/product.model';
import { PRODUCTS_URL } from '../constants/api.constants';
import { setProducts } from '../store/product/product.slice';
import { AppDispatch } from '../store/store';

export const fetchProductsApi = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<ProductModel[]>(PRODUCTS_URL);
        dispatch(setProducts(response.data));
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

export const createProductApi = async (product: Partial<ProductModel>): Promise<ProductModel> => {
    const response = await axios.post<ProductModel>(PRODUCTS_URL, product);
    return response.data;
};
