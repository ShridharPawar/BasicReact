import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Movies from './Movies'



class App extends Component {
 
  render() {
    
    return (
     <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Shridhar's Favourite Movies</h1>
        </header>
           <Movies/>
        </div>
    
    );
  }
}

export default App;

