import React, { Component } from 'react';
import logo from '../logo.svg';

class About extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p> About </p>
      </div>
    );
  }
}

export default About;
