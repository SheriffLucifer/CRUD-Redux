import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductStateModel } from '../../models/state/product-state.model';
import { ProductModel } from '../../utils/product.model';

const initialState: ProductStateModel = {
    products: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload;
        },
        addProductAction: (state, action: PayloadAction<ProductModel>) => {
            state.products = [action.payload, ...state.products];
        },
        removeProductAction: (state, action: PayloadAction<Number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        updateProductAction: (state, action: PayloadAction<ProductModel>) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
    },
});

export const { setProducts, addProductAction, removeProductAction, updateProductAction } = productSlice.actions;

export default productSlice.reducer;
