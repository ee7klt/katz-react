import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import {startGame, cancelGame, expandInstructions, collapseInstructions} from './actions/settings';


const store = createStore(rootReducer);
store.subscribe(() => console.log('store.getState()', store.getState()))



console.log(store.getState())
store.dispatch(startGame());
store.dispatch(expandInstructions());
store.dispatch(cancelGame());
store.dispatch(collapseInstructions());



ReactDOM.render(<App />,
  document.getElementById('root')
);
