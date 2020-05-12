import {connect} from 'react-redux';
import React from 'react';


const ShowCard = props => {
  console.log("ShowCard props",props)
  return (

    <div style={{margin:10}}>
    {
      (props.isFetchingCard) ?
      <div style={{height:100}} className="d-flex justify-content-center align-items-center">
      <div className="spinner-grow" role="status">
    <span className="sr-only">Loading...</span>
  </div>
      </div> :
  (props.cards[0] ? <div className="fadeIn three"><img height='100' src={props.cards[0].image} /> </div>: <div style={{height:100}}></div>)}
  </div>
  )
}


const mapStateToProps = state => {
  return {
    cards: state.deck.cards,
    isFetchingCard: state.deck.isFetchingCard
  }
}


export default connect(
  mapStateToProps
)(ShowCard);
