import React, {Component} from 'react';

class RegularClass {}
class ComponentClass extends Component {}
const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();
console.log('regularClassInstance',regularClassInstance);
console.log('componentClassInstance',componentClassInstance);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Alex</p>
        <p>I'm a Machine Learning Engineer</p>
      </div>
    )
  }
}

export default App;
