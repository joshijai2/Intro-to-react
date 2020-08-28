import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';

class App extends Component {
  state = {
    userInput : "Please enter text"
  }

  inputChangedHandler = event => {
    this.setState({userInput: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
            
            <input type = 'text'
            onChange={this.inputChangedHandler}
            value={this.state.userInput}
            />

            <p>
              {this.state.userInput}
            </p>
            <Validation inputLength={this.state.userInput.length}/>
        </div>
      </div>
    );
  }
}

export default App;