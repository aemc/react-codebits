import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import rootReducers from './reducers';
//
// const store = createStore(rootReducers);
// console.log(store.getState());
// store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
    <App/>
    // <Provider store={store}>
    //     <App/>
    // </Provider>
    , document.querySelector('.container'));