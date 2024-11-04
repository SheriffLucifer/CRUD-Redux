import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../store/product/product.slice';
import cartReducer from '../store/cart/cart.slice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
