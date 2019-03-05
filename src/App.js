import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="navbar">
          <p>Nav bar</p>
        </div>
        <div className="sidebar">
          <p>side bar</p>
        </div>
        <div className="main-content">
          <p>main content</p>
        </div>
      </div>
    );
  }
}

export default App;
