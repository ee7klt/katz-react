import React, {Component} from 'react';
import {connect} from 'react-redux';
import {drawNewCard} from '../actions/deck';


  class DrawCard extends Component {
    render() {
  return (
    <div>
    <button type="button" className="btn btn-primary" onClick={this.props.drawNewCard} >Draw the next card!</button>
    </div>
  )
}
}



export default connect(
  ({deck: {deck_id}}) => ({deck_id}),
  {drawNewCard}
)(DrawCard);
