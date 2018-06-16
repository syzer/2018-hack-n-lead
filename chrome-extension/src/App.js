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
          <img src="https://ipfs.io/ipfs/QmVZdABgbYJFwDnPxficeH6h7RpqnKvzCnMqz3TZnwaE1L" alt="adapter stack" height={200}/>
        </header>
      </div>
    )
  }
}

export default App
