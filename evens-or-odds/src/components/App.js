import React, {Component} from 'react';
import {connect} from 'react-redux';
import {cancelGame,startGame,expandInstructions,collapseInstructions} from '../actions/settings';
import Instructions from './Instructions';


class App extends Component {


  render() {
    console.log('this',this);
    return (
      <div >
      <h2>Evens or Odds</h2>
      {
        this.props.gameStarted ? (
          <div>
            <h3>The game is on!</h3>
            <br />
            <button onClick={this.props.cancelGame}>Cancel Game</button>
          </div>
        ) : (
          <div>
          <h3>A new game awaits</h3>
          <br />
          <button onClick={this.props.startGame}>Start Game</button>
          </div>
        )
      }
      {
        <div>
        {
          this.props.instructionsExpanded ?
          <div>
            <Instructions />
              <button onClick={this.props.collapseInstructions}>Collapse instructions</button>
          </div> :
          <button onClick={this.props.expandInstructions}>Expand instructions</button>

        }
        </div>
      }
      </div>

    )
  }
}


const mapStateToProps = state => {
  console.log('state',state);
  return {
    gameStarted: state.gameStarted,
    instructionsExpanded: state.instructionsExpanded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    cancelGame: () => dispatch(cancelGame()),
    expandInstructions: () => dispatch(expandInstructions()),
    collapseInstructions: () => dispatch(collapseInstructions())
  }
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);


export default componentConnector(App);
