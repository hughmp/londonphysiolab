import React from 'react';
import './styles/bootstrap/bootstrap.min.css';
import './styles/App.css';
import ReactRouter from 'react-router';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <div className="app">
    <Navbar />
    <div className="content" />
    <div className="content" />
    <Footer />
  </div>
);

export default App;
