import {connect} from 'react-redux';
import React from 'react';


const ShowCard = () => {
  return (
    <div>
    {props.cards[0]}
  </div>
  )
}


const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}


export default connect(
  mapStateToProps
)(ShowCard);
