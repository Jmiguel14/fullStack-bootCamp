import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import counterReducer from './reducers/counterReducer';
import reportWebVitals from './reportWebVitals';

export const renderApp = () => ReactDOM.render( <App />,document.getElementById('root'));

export const store = createStore(counterReducer)
renderApp()
store.subscribe(renderApp)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
