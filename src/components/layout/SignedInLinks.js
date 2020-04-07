import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
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
        <NavLink to="/createjuice">Create Glass</NavLink>
      </div>

      <div className="link">
        <NavLink to="/">Log Out</NavLink>
      </div>
    </div>
  )
}

export default SignedInLinks