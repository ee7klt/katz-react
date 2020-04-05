import React, {Component} from 'react';
import {connect} from 'react-redux';
import {expandInstructions,collapseInstructions} from '../actions/settings';


class Instructions extends Component {
  render() {
    return (
      <div>
      {
        this.props.instructionsExpanded ?
        <div>
          <p>Guess even or odd</p>
            <button onClick={this.props.collapseInstructions}>Collapse instructions</button>
        </div> :
        <button onClick={this.props.expandInstructions}>Expand instructions</button>

      }
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    instructionsExpanded: state.instructionsExpanded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    expandInstructions: () => dispatch(expandInstructions()),
    collapseInstructions: () => dispatch(collapseInstructions())
  }
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);


export default componentConnector(Instructions);
