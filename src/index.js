import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
    auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));



const app = (
    <Provider store={store}>
        <Main/>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
