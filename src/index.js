import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import axios from 'axios'
import reducer from './reducers/auth';

axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');

// const store = createStore(rootReducer);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Or with jQuery




const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances(
  applyMiddleware(thunk)
))

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root')
);
