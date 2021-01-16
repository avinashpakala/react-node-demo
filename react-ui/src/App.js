import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      connections: null,
      error: null,
      users:null,
      relations:null,
      degree:null,
      startValue:"1",
      endValue:"5"
    };

    this.starthandleChange = this.starthandleChange.bind(this);
    this.endhandleChange = this.endhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

     
    // fetch('/api/degree?startID=2&endID=5',{
    // })
    // .then(res => res.json())
    // .then(data => {
    //    this.setState({ degree: data })
    //   })
  }

  starthandleChange(event) {
    this.setState({startValue: event.target.value});
  }
   endhandleChange(event) {
    this.setState({endValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var startQuery = this.state.startValue;
    var endQuery = this.state.endValue;
    
    fetch('/api/degree?startID='+startQuery+ '&'+ 'endID='+endQuery,{
    })
    .then(res => res.json())
    .then(data => {
      this.setState({ degree: data });
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
        <form onSubmit={this.handleSubmit}>
        <label>
          Pick your start user:
          <select value={this.state.startValue} onChange={this.starthandleChange}>
            <option value="1">Sameer</option>
            <option value="2">Aayushi</option>
            <option value="3">KamalNath Sharma</option>
            <option value="4">ShantiKumar Saha</option>
            <option value="5">Bhaskar</option>
          </select>
        </label>
        <label>
          Pick your end user:
          <select value={this.state.endValue} onChange={this.endhandleChange}>
            <option value="1">Sameer</option>
            <option value="2">Aayushi</option>
            <option value="3">KamalNath Sharma</option>
            <option value="4">ShantiKumar Saha</option>
            <option value="5">Bhaskar</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
     
      <p className="App-intro">{degree}</p>
      <p className="App-intro">{error}</p>
      </div>
    )
  }
}

export default App
