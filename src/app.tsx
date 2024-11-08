import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SApp, SHeader } from './assets/styles/app.styles';
import ProductListContainer from './components/product/list/product-list.container';
import Cart from './components/cart/cart.component';

function App() {
    return (
        <SApp>
            <SHeader>
                <BrowserRouter basename='/CRUD-Redux'>
                    <Routes>
                        <Route path='/' element={<ProductListContainer />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </SHeader>
        </SApp>
    );
}

export default App;
