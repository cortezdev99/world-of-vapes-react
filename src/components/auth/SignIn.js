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
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="create-form">
          <h5>Sign In!</h5>
          <div className="input-field-group">
            <div>
              <input
                id="email"
                className="input"
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="password"
                className="input"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>


            <div className="button-wrapper">
              <button className="btn signin-btn">Login</button>
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