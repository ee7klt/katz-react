import React, {Component} from 'react';
import {connect} from 'react-redux';
import {cancelGame} from '../actions/settings';
import {fetchNewDeck} from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import DrawCard from './DrawCard';

class App extends Component {



  render() {


    if (this.props.isFetching) {
      return (
        <div className='container-fluid'>
        <h2>Evens or Odds</h2>
          <p>fetching post ...</p>
        </div>
      )
    }

    else if (this.props.fetchState === fetchStates.error) {
      return (
        <div className='container-fluid'>
        <h2>Evens or Odds</h2>
        <p>{this.props.message}</p>
        </div>
      )
    }


    else return (
      <div className='container-fluid'>
      <h2>Evens or Odds</h2>
      {
        this.props.gameStarted ? (
          <div>
            <h3>The game is on!</h3>
            <br />
        <DrawCard />
          <hr />
            <button type="button" className="btn btn-primary" onClick={this.props.cancelGame}>Cancel Game</button>
          </div>
        ) : (
          <div>
          <h3>A new game awaits</h3>
          <br />
          <button type="button" className="btn btn-primary" onClick={this.props.fetchNewDeck}>Start Game</button>
          </div>
        )
      }

      </div>

    )
  }
}


const mapStateToProps = state => {
  const {gameStarted} = state.settings;
  const {fetchState, message, isFetching} = state.deck;
  return  {gameStarted, fetchState, message, isFetching};
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => fetchNewDeck(dispatch)
//   }
// }


export default connect(
  mapStateToProps,
  {cancelGame, fetchNewDeck}
)(App);
