import { SApp, SHeader } from './assets/styles/app.styles';
import ProductListContainer from './components/product/list/product-list.container';

function App() {
    return (
        <SApp>
            <SHeader>
                <ProductListContainer />
            </SHeader>
        </SApp>
    );
}

export default App;
