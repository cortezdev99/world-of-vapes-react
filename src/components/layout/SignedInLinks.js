import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div className="links">
      <div className="link">
          <NavLink to="/">Homepage</NavLink>
      </div>

      <div className="link">
        <NavLink to="/">Devices</NavLink>
      </div>

      <div className="link">
        <NavLink to="/">Juice</NavLink>
      </div>

      <div className="link">
        <NavLink to="/">Glass</NavLink>
      </div>

      <div className="link">
        <NavLink to="/">Contact</NavLink>
      </div>

      <div className="link">
        <NavLink to="/">Create Devices</NavLink>
      </div>

      <div className="link">
        <NavLink to="/">Create Juice</NavLink>
      </div>

      <div className="link">
        <NavLink to="/">Create Glass</NavLink>
      </div>

      <div className="link">
        <NavLink to="/">Log Out</NavLink>
      </div>
    </div>
  )
}

export default SignedInLinks