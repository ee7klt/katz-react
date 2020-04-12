import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDeckResult} from '../actions/deck';

class FetchDeck extends Component {
  render() {
    return (
      <div className='container-fluid'>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.props.fetchDeck }>
        Fetch Deck
      </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    remaining: state.remaining,
    deck_id: state.deck_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDeck: () => {
      fetch('http://deckofcardsapi.com/api/deck/new/shuffle/')
      .then(response => response.json())
      .then(json => dispatch(fetchDeckResult({remaining:json.remaining,deck_id:json.deck_id})))
    }
  }
}

const componentConnector = connect(mapStateToProps,mapDispatchToProps);



export default componentConnector(FetchDeck);
