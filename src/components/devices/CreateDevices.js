import React, { Component } from 'react'

export default class CreateDevices extends Component {
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
    console.log(this.state)
  }
  
  render() {
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
              id="brandTitle"
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