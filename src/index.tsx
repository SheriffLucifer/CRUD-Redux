import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import GlobalStyles from './assets/styles/global.styles';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <App />
        <GlobalStyles />
    </Provider>
);
