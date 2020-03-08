import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';


ReactDOM.render(<App></App>,document.getElementById('root'));


new Promise((resolve,reject) => {

    setTimeout(()=> {
      resolve('Bears, Beats, Battlestar Galactica');
    },2000)
  




})
.then(quote=>{
  console.log(quote)
})
.catch(error => console.log('error',error));
