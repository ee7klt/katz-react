import React, {Component} from 'react';

const Joke = ({joke:{id, type, setup, punchline}}) => {
  return (
    <div style={{margin:20}}>
    <span >{setup}</span>
    <br/>
    <em >{punchline}</em>
    </div>
  )
  }

  class TenJokes extends Component {
    state = {jokes: [], myObj: [{'hi':'there'},{'one':'two'}]};
    fetchJokes = () => {
      fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes: json}))
        .catch(error => alert(error.message));
    }

    render() {
      return (
        <div>
        <h2>10 Random Jokes</h2>
        <button onClick={this.fetchJokes}>Click Me!</button>
        {this.state.jokes.map(joke =>  (<Joke key={joke.id} joke = {joke}/>))}
        </div>

      )
    }

    }


export default TenJokes;
