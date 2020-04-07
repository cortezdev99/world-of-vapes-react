import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createJuice } from '../../store/actions/juiceActions'

class CreateJuice extends Component {
  constructor() {
    super()
    this.state = {
      brand: '',
      descript: '',
      flavor1: '',
      flavor2: '',
      flavor3: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createJuice(this.state)
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
              id="descript"
              type="text"
              placeholder="Description"
              onChange={this.handleChange}
            />

            <input
              id="flavor1"
              type="text"
              placeholder="Flavor"
              onChange={this.handleChange}
            />

            <input
              id="flavor2"
              type="text"
              placeholder="Flavor"
              onChange={this.handleChange}
            />

            <input
              id="flavor3"
              type="text"
              placeholder="Flavor"
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

const mapDispatchToProps = (dispatch) => {
  return {
    createJuice: (juice) => dispatch(createJuice(juice))
  }
}

export default connect(null, mapDispatchToProps)(CreateJuice)