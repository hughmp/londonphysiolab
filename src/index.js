import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './styles/index.css';

import App from './App';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/404';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
    </Route>
    <Route path='*' component={App}>
      <IndexRoute component={NotFound} />
    </Route>
  </Router>
 ), document.getElementById('root')
);
