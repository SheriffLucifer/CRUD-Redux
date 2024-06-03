import { ProductStateModel } from '../../models/state/product-state.model';
import { RootState } from '../store';

const selectProductState = (state: RootState): ProductStateModel => state.product;

export const selectProducts = (state: RootState) => selectProductState(state).products;
