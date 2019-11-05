import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App></App>,document.getElementById('root'));


class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(' I am ', this.name, ' and I am ', this.age, ' years old')
  }
}

const animal = new Animal('simba',42)
animal.speak();
console.log(animal)
