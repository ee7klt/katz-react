import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Jokes from './components/Jokes';
import {Router, Switch, Route} from 'react-router-dom';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
    <Route  exact={true} path='/' render={()=> <Header Component={App} />}></Route>
      <Route path='/jokes' render={()=> <Header Component={Jokes} />}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);


new Promise((resolve,reject) => {

    setTimeout(()=> {
      resolve('Bears, Beats, Battlestar Galactica');
    },2000)





})
.then(quote=>{
  console.log(quote)
})
.catch(error => console.log('error',error));
