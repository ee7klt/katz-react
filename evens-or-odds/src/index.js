import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import {startGame, cancelGame, expandInstructions, collapseInstructions} from './actions/settings';


const store = createStore(rootReducer);
store.subscribe(() => console.log('store.getState()', store.getState()))







ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
,
  document.getElementById('root')
);
