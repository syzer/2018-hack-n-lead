import React, { Component } from 'react'
import verified from './icon-verified.png'
import unVerified from './icon-not-verified.svg'
import iconLoading from './icon-loading.png'
import './App.css'

window.chrome.browserAction = window.chrome.browserAction  || {
  setBadgeText: () => {
  }
}

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      icon: iconLoading,
      verifiedString: 'Verified',
      payed: false
    }

    // payment API/ smart contract
    setTimeout(() => {
      console.error(window.location)
      this.setUnverified()
    }, 1500)
  }

  setUnverified = () => {
    window.chrome.browserAction.setBadgeText({ text: 'X' })
    this.setState({
      icon: unVerified,
      verifiedString: 'Un Verified! Warning danger website.',
    })
  }

  setVerified = () => {
    window.chrome.browserAction.setBadgeText({ text: 'V' })
    this.setState({
      icon: verified,
      verifiedString: 'All assets on that page are verified.',
    })

    // Bellow done't work on canary, why ?
    // @see https://developer.chrome.com/extensions/browserAction
    // eslint-disable-next-line
    // chrome.browserAction.setIcon({
    //   path : 'icon-verified.png'
    // })
  }

  render() {
    console.log('react app running 2')
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.icon} className="App-logo" alt="logo"/>
          <h1 className="App-title">Your content is: {this.state.verifiedString}</h1>
          <img
            src="https://ipfs.io/ipfs/QmVZdABgbYJFwDnPxficeH6h7RpqnKvzCnMqz3TZnwaE1L" alt="adapter stack"
            height={200}/>
        </header>
      </div>
    )
  }
}

export default App
