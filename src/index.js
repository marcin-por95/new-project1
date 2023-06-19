
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import './styles/normalize.scss';
import './styles/global.scss';

import { createRoot } from 'react-dom/client';


const rootElement = document.querySelector('#root');

createRoot(rootElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

