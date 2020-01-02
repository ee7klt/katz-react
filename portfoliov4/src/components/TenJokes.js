import React, {Component} from 'react';

const Joke = props => {
  const {id, type, setup, punchline} = props.joke;
  return (
    <div>
    <span >{setup}</span>
    <br/>
    <em >{punchline}</em>
    </div>
  )
  }

  class TenJokes extends Component {
    state = {jokes: []};
    componentDidMount() {
      fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes: json}))
    }

    render() {
      const item = this.state.jokes[0];
      return (
        <div>
        <h2>10 Random Jokes</h2>
        {
          this.state.jokes.map(joke =>{
          return  (
              <div key = {joke.id}>
              <Joke joke = {joke}/>
              </div>
          )
          })
        }

        </div>

      )
    }

    }


export default TenJokes;
