import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './pages/editpage/edit'

import Contact from './contact'

const routing = (
  
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/edit" component={Edit} />
        <Route path="/contact" component={Contact} />
        
      </div>
    </Router>
    
  )
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
