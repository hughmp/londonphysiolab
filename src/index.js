import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import './styles/index.css';

import App from './App';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Locations from './components/pages/Locations';
import Contact from './components/pages/Contact';
import Fees from './components/pages/Fees';
import Insurance from './components/pages/Insurance';
import NotFound from './components/pages/404';

const routes = {
  component: App,
  childRoutes: [{
    path: '/',
    component: Home,
  }, {
    path: '/about',
    component: About,
  }, {
    path: '/services',
    component: Services,
  }, {
    path: '/locations',
    component: Locations,
  }, {
    path: '/contact',
    component: Contact,
  }, {
    path: '/fees',
    component: Fees,
  }, {
    path: '/insurance',
    component: Insurance,
  }, {
    path: '*',
    component: NotFound,
  }],
};

ReactDOM.render((
  <Router
    history={browserHistory}
    onUpdate={() => window.scrollTo(0, 0)}
    routes={routes}
  />
), document.getElementById('root'));
