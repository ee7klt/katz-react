import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import FetchDeck from './components/FetchDeck';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js';
import thunk from 'redux-thunk';
import './index.css';


const store = createStore(rootReducer,applyMiddleware(thunk));
store.subscribe(() => console.log('store.getState()', store.getState()))



ReactDOM.render(
  <Provider store={store}>
    <App />
    <div>test test</div>

  </Provider>
,
  document.getElementById('root')
);
