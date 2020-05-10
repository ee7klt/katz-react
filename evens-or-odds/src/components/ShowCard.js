import {connect} from 'react-redux';
import React from 'react';


const ShowCard = props => {
  console.log("ShowCard props",props)
  return (
    <div>
  { props.cards[0] ? <img src={props.cards[0].image} /> : "no card"}
  </div>
  )
}


const mapStateToProps = state => {
  return {
    cards: state.deck.cards
  }
}


export default connect(
  mapStateToProps
)(ShowCard);
