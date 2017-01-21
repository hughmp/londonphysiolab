import React from 'react';

import './styles/bootstrap/bootstrap.min.css';
import './styles/App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = ({ children }) => (
  <div className="app">
    <Navbar />
    { children }
    <Footer />
  </div>
);

App.propTypes = {
  children: React.PropTypes.element,
};

App.defaultProps = {
  children: null,
};

export default App;
