import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from "react-router"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Link to="/Contact">Contact </Link>
        <Link to="/About"> About </Link>
        {this.props.children}
        
      </div>
      
    );
  }
}

export default App;
