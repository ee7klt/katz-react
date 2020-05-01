import React, {Component} from 'react';
import {connect} from 'react-redux';
import {drawNewCard} from '../actions/deck';


  class DrawCard extends Component {
    render() {
  return (
    <div>
    <button type="button" className="btn btn-primary" onClick={this.props.drawNewCard(this.props.deck_id)} >Draw the next card!</button>
    </div>
  )
}
}

const mapDispatchToProps = dispatch => {
  return {
    drawNewCard: deck_id => ()  => dispatch(drawNewCard(deck_id))
  }
}



export default connect(
  ({deck: {deck_id}}) => ({deck_id}),
  mapDispatchToProps
)(DrawCard);
