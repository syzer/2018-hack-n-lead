import React, { Component } from 'react'
import verified from './icon-verified.png'
import unVerified from './icon-not-verified.svg'
import iconLoading from './icon-loading.png'
import './App.css'

window.chrome.browserAction = window.chrome.browserAction || {
  setBadgeText: () => {
  }
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      icon: iconLoading,
      payed: false,
      resources: [],
      verifiedString: 'Verified'
    }

    // payment API/ smart contract
    setTimeout(() => {
      // console.error(JSON.stringify(window.location))
      this.setUnverified()
    }, 1500)
  }

  setUnverified = () => {
    window.chrome.browserAction.setBadgeText({ text: 'X' })
    this.setState({
      icon: unVerified,
      verifiedString: 'Unverified! Warning dangerous website.',
    })

    let data = 'UnVerified'

    // eslint-disable-next-line
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      // eslint-disable-next-line
      chrome.tabs.sendMessage(tabs[0].id, {data}, response => {
        console.log('response', response)
        // eslint-disable-next-line
        this.setState({
          resources: [response]
        })
        console.log('success')
      })
    })
  }


  // componentDidMount() {
  //   // Add listener when component mounts
  //   window.chrome.runtime.onMessage.addListener(this.handleMessage)
  // }
  //
  // handleMessage = (msg) => {
  //   alert(msg)
  //   // Handle received messages
  //   if (msg.target === 'app') {
  //     if (msg.type === 'setMessage') {
  //       this.setState({ message: msg.body })
  //     }
  //   }
  // }
  //
  // componentWillUnmount() {
  //   alert('ssss')
  //   // Remove listener when this component unmounts
  //   window.chrome.runtime.onMessage.removeListener(this.handleMessage)
  // }

  // componentWillUnmount = () => {
  //   window.chrome.browserAction.setBadgeText({ text: '' })
  // }

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
          {this.state.resources.map((e, i) =>
            <p key={i}>Resource: {e}</p>)}
          <img
            src="https://ipfs.io/ipfs/QmVZdABgbYJFwDnPxficeH6h7RpqnKvzCnMqz3TZnwaE1L" alt="adapter stack"
            height={200}/>
        </header>
      </div>
    )
  }
}

export default App
