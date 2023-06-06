import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.querySelector('#root')
);