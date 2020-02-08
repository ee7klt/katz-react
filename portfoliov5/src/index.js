import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Jokes from './components/TenJokes';
import {Router, Switch, Route} from 'react-router-dom';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';


ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
    <Route  exact={true} path='/' component={App}></Route>
      <Route path='/jokes' component={Jokes}></Route>
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
