import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
// import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message />
        <Greet name='Bruce'>Yo</Greet>
        <Greet name='Clark'>Hey</Greet>
        <Greet name='Diana'>Hea</Greet>
      </header>
    </div>
  );
}

export default App;
