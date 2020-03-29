import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}

const SET_GAME_STARTED = 'SET_GAME_STARTED';
const SET_INSTRUCTIONS_EXPANDED = 'SET_INSTRUCTIONS_EXPANDED';


const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  switch (action.type) {
    case SET_GAME_STARTED:
      return {
        ...state, gameStarted: action.gameStarted
      }
    case SET_INSTRUCTIONS_EXPANDED:
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded
      }
    default:
      return state;
  }
}
const store = createStore(rootReducer);
store.subscribe(() => console.log('store.getState()', store.getState()))
const startGame = () => {
  return {gameStarted:true, type: SET_GAME_STARTED};
}

const cancelGame = () => {
  return {gameStarted:false, type: SET_GAME_STARTED};
}

const expandInstructions = () => {
  return {instructionsExpanded:true, type: SET_INSTRUCTIONS_EXPANDED};
}

const cancelInstructions = () => {
  return {instructionsExpanded:false, type: SET_INSTRUCTIONS_EXPANDED};
}


console.log(store.getState())
store.dispatch(startGame());
store.dispatch(expandInstructions());



ReactDOM.render(<App />,
  document.getElementById('root')
);
