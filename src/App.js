import React, { Component } from 'react';
import './App.css';
import UserInput from './Componets/UserInput';
import UserOutput from './Componets/UserOutput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Base Syntax Assignment</h1>
        <UserInput />
        <UserOutput username="user"/>
        <UserOutput username="user"/>
      </div>
    );
  }
}

export default App;
