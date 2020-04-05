import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
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
    </div>
  )
}

export default SignedOutLinks