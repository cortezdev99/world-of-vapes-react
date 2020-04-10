import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div className="links">
      <div className="link">
          <NavLink to="/">Homepage</NavLink>
      </div>

      <div className="link">
        <NavLink to="/devices">Devices</NavLink>
      </div>

      <div className="link">
        <NavLink to="/glass">Juice</NavLink>
      </div>

      <div className="link">
        <NavLink to="/juice">Glass</NavLink>
      </div>

      <div className="link">
        <NavLink to="/createdevice">Create Devices</NavLink>
      </div>

      <div className="link">
        <NavLink to="/createjuice">Create Juice</NavLink>
      </div>

      <div className="link">
        <NavLink to="/createglass">Create Glass</NavLink>
      </div>

      <div className="link">
        <NavLink to="/" onClick={props.signOut}>Log Out</NavLink>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)