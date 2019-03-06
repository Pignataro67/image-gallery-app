import React, { Component } from 'react';
import Images from './components/Images';
import './App.css';

let images = [
  { title: 'Me', id: 1 },
  { title: 'You', id: 2 }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="navbar">
          {/* <Navbar /> */}
        </div>
        <div className="sidebar">
          <Images images={images}/>
        </div>
        <div className="main-content">
          {/* <Image /> */}
        </div>
      </div>
    );
  }
}

export default App;
