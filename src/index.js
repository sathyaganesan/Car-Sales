import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import { AddedReducer } from './Reducers/AddedReducer';

const store = createStore(AddedReducer)  
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <App />
    // </Provider >
    , rootElement);


    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());