import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Happy Birthday Drew!</h2>
        </div>
        <p className="App-intro">
          <div className="banner">
            <img src="https://media.giphy.com/media/7JGpV08jBRytG/giphy.gif" alt="fuck you yarn" />
          </div>
          <br/>
          I&apos;m not sure what you&apos;re gonna use this for, but you have it now...
        </p>
      </div>
    );
  }
}

export default App;
