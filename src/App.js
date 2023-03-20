import React, { Component } from 'react'
import './App.css'
import { io } from 'socket.io-client'

class App extends Component {
  constructor(props) {
    super(props)
    window.app = this
    window.App = this

    if (window.location.href.includes('localhost')) {
      this.socket = io('http://localhost:4000')
      this.domain = 'http://localhost:4000'
    }
  }

  componentDidMount() {
    this.socket.emit('test', 'hello')
  }

  render() {
    return (
      <>
        <h1>Hello World</h1>
      </>
    )
  }
}

export default App