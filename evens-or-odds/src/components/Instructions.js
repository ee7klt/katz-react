import React, {Component} from 'react';
import {connect} from 'react-redux';
import {expandInstructions,collapseInstructions} from '../actions/settings';


const Instructions  = props  => {
  const {instructionsExpanded,expandInstructions,collapseInstructions} = props;
  console.log("props from instructions",props)
  return (
  <div className='container-fluid'>
    {
      instructionsExpanded ?
      <div>
      <h3>Instructions</h3>
      <p>Welcome to evens or odds. The game goes like this. </p>
      <p>The deck is shuffled. Then choose: will the next card be even or odd?</p>
      <p>Make a choice on every draw, and see how many you get right</p>
          <button  type="button" className="btn btn-primary" onClick={collapseInstructions}>Show less</button>
      </div> :
      <div >
      <h3>Instructions</h3>
      <p>Welcome to evens or odds. The game goes like this ... </p>
      <button type="button" className="btn btn-primary" onClick={expandInstructions}>Show more</button>
      </div>
    }
    </div>
  )
}




const mapStateToProps = state => {
  return {
    instructionsExpanded: state.settings.instructionsExpanded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    expandInstructions: () => dispatch(expandInstructions()),
    collapseInstructions: () => dispatch(collapseInstructions())
  }
}


export default connect(
  state => ({instructionsExpanded: state.settings.instructionsExpanded}),
  {expandInstructions, collapseInstructions}
)(Instructions);
