import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home.js'
import AddCard from './components/AddCard.js'
import EditCards from './components/EditCards.js'
import Login from './components/Login.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddCard} />
            <Route path="/edit" component={EditCards} />
            <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
