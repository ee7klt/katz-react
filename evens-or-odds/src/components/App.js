import React, {Component} from 'react';
import {connect} from 'react-redux';
import {cancelGame,startGame} from '../actions/settings';
import {fetchDeckResult} from '../actions/deck';


class App extends Component {

  startGame = () => {
      fetch('http://deckofcardsapi.com/api/deck/new/shuffle/')
      .then(response => response.json())
      .then(json => this.props.fetchDeckResult(json))
      .then( x =>  this.props.startGame())

  }

  render() {
    return (
      <div className='container-fluid'>
      <h2>Evens or Odds</h2>
      {
        this.props.gameStarted ? (
          <div>
            <h3>The game is on!</h3>
            <br />
            <button type="button" className="btn btn-primary" onClick={this.props.cancelGame}>Cancel Game</button>
          </div>
        ) : (
          <div>
          <h3>A new game awaits</h3>
          <br />
          <button type="button" className="btn btn-primary" onClick={this.startGame}>Start Game</button>
          </div>
        )
      }

      </div>

    )
  }
}


const mapStateToProps = state => {
  return {
    gameStarted: state.gameStarted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    cancelGame: () => dispatch(cancelGame()),
    fetchDeckResult: deckJson => dispatch(fetchDeckResult(deckJson))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
