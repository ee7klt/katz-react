import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Instructions from './components/Instructions';
import FetchDeck from './components/FetchDeck';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';


const store = createStore(rootReducer);
store.subscribe(() => console.log('store.getState()', store.getState()))



ReactDOM.render(
  <Provider store={store}>
    <App />
    <Instructions />
    <FetchDeck />
  </Provider>
,
  document.getElementById('root')
);
