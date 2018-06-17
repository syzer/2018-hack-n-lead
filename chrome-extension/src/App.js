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
      this.setUnverified()
    }, 1500)
  }

  setUnverified = () => {
    window.chrome.browserAction.setBadgeText({ text: 'X' })

    this.setState({
      icon: unVerified,
      verifiedString: 'Unverified!',
    })

    let data = 'UnVerified'

    // eslint-disable-next-line
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      // eslint-disable-next-line
      chrome.tabs.sendMessage(tabs[0].id, { data }, response => {
        console.error(JSON.stringify(response))
        response.data = response.data || []
        // eslint-disable-next-line
        this.setState({
          resources: JSON.parse(response.data)
        })
      })
    })
  }

  setVerified = () => {
    window.chrome.browserAction.setBadgeText({ text: 'V' })
    this.setState({
      icon: verified,
      verifiedString: 'All assets on that page are verified.',
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.icon} className="App-logo" alt="logo"/>
          <h1 className="App-title">Your content is: {this.state.verifiedString}</h1>
          {this.state.resources.map((e, i) =>
            <img
              src={e.src}
              key={i}
              className={e.className}
              height={100}/>)}
        </header>
      </div>
    )
  }
}

export default App
