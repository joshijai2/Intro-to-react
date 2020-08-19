import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React app.</h1>
        <Person name='JJ' age='20' />
        <Person name='MJ' age='20' />
        <Person name='AA' age='19' />
      </div>
    );
  }
}

export default App;
