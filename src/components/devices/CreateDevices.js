import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { createDevices } from '../../store/actions/devicesActions'

class CreateDevices extends Component {
  constructor() {
    super()
    this.state = {
      brand: '',
      deviceTitle: '',
      descript: '',
      color1: '',
      color2: '',
      color3: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createDevices(this.state)
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
              id="deviceTitle"
              type="text"
              placeholder="Device Name"
              onChange={this.handleChange}
            />

            <input
              id="descript"
              type="text"
              placeholder="Description"
              onChange={this.handleChange}
            />

            <input
              id="color1"
              type="text"
              placeholder="Color"
              onChange={this.handleChange}
            />

            <input
              id="color2"
              type="text"
              placeholder="Color"
              onChange={this.handleChange}
            />

            <input
              id="color3"
              type="text"
              placeholder="Color"
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
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDevices: (device) => dispatch(createDevices(device))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDevices)