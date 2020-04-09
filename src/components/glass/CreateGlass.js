import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { createGlass } from '../../store/actions/glassActions'

class CreateGlass extends Component {
  constructor() {
    super()
    this.state = {
      brand: '',
      descript: '',
      size: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createGlass(this.state)
  }
  
  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to="/auth" />
    return (
      <div className="signin-container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              id="brand"
              type="text"
              placeholder="Brand Name"
              onChange={this.handleChange}
            />

            <input
              id="descript"
              type="text"
              placeholder="Description"
              onChange={this.handleChange}
            />

            <input
              id="size"
              type="text"
              placeholder="Size"
              onChange={this.handleChange}
            />

            <div className="form-button">
              <button>Create</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.firebase.auth)
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createGlass: (glass) => dispatch(createGlass(glass))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGlass)