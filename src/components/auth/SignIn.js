import React, { Component } from 'react'

export default class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }
  
  render() {
    return (
      <div className="signin-container">
        <form onSubmit={this.handleSubmit}>
          <h5>Sign In!</h5>

          <div className="input-field">
            <input
              id="email"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
            />

            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />

            <div className="form-button">
              <button>Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
