import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
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
    this.props.signIn(this.state)
  }
  
  render() {
    const { authError } = this.props
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
              { authError ? <div className="error">{authError}</div> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)