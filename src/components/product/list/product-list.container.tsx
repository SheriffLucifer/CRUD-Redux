import ProductList from './product-list.component';
import useProducts from '../../../products.hook';
import ProductCreationContainer from './ProductCreationContainer';

const ProductListContainer: React.FC = () => {
    const { loading, error } = useProducts();

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ProductList />
            <ProductCreationContainer />
        </div>
    );
};

export default ProductListContainer;
