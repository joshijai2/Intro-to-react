import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { name: 'JJ', age: 20},
      { name: 'AJ', age: 16},
      { name: 'MJ', age: 21}
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked.');
    // Don't do this: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons:[
        { name: 'JaiJ', age: 22},
        { name: 'AdiJ', age: 18},
        { name: 'MaeveJ', age: 21}
      ]
     })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React app.</h1>
        <button onClick = {this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
