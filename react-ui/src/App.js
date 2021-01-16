import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    connections: null,
    error: null,
    users:null,
    relations:null,
    degree:null,
  }

  componentDidMount() {
    
    fetch('/api/users')
    .then(res => {
      if (!res.ok) {
        throw new Error(`/api/users HTTP status ${res.status}`)
      }

      return res
    })
    .then(res => res.json())
    .then(data => {
      this.setState({ users: data })
    })
    .catch(err => {
      this.setState({ error: err.toString() })
    })

    
    fetch('/api/relations')
    .then(res => res.json())
    .then(data => {
      this.setState({ relations: data })
    })

    
    fetch('/api/connections')
    .then(res => {
        if (!res.ok) {
          throw new Error(`/api/postgres HTTP status ${res.status}`)
        }

        return res
      })
      .then(res => res.json())
      .then(data => {
        this.setState({ connections: data })
      })
      .catch(err => {
        this.setState({ error: err.toString() })
      })

     
    fetch('/api/degree')
    .then(res => res.json())
    .then(data => {
       this.setState({ degree: data })
      })
  }
  render() {
    const { hello, connections,users,relations,degree, error } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{users}</p>
        <p className="App-intro">{relations}</p>
        <p className="App-intro">{connections}</p>
        <p className="App-intro">{degree}</p>
        <p className="App-intro">{error}</p>
      </div>
    )
  }
}

export default App
