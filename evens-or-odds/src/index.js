import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Instructions from './components/Instructions';
import FetchDeck from './components/FetchDeck';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js';
import thunk from 'redux-thunk';


const store = createStore(rootReducer,applyMiddleware(thunk));
store.subscribe(() => console.log('store.getState()', store.getState()))



ReactDOM.render(
  <Provider store={store}>
    <App />
    <Instructions />

  </Provider>
,
  document.getElementById('root')
);
