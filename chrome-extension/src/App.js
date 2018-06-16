import React, { Component } from 'react'
import verified from './icon-verified.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={verified} className="App-logo" alt="logo" />
          <h1 className="App-title">Your content is:</h1>
        </header>
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;
