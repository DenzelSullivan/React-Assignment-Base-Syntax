import React, { Component } from 'react';
import './App.css';
import UserInput from './Componets/UserInput';
import UserOutput from './Componets/UserOutput';
import './Componets/User.css';

class App extends Component {
  state = {
    users: [
      { username: "Denzel" }
    ]
  }

  switchNameHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>React Base Syntax Assignment</h1>
        <UserInput 
          style={style}
          username={this.state.users[0].username} 
          changed={this.switchNameHandler}/>
        <UserOutput username={this.state.users[0].username}/>
        <UserOutput username="user"/>
      </div>
    );
  }
}

export default App;
