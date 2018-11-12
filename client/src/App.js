import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage.js'
import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/displays" component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
