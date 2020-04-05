import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div className="container">
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/">Devices</NavLink>
      <NavLink to="/">Juice</NavLink>
      <NavLink to="/">Glass</NavLink>
      <NavLink to="/">Contact</NavLink>

    </div>
  )
}

export default SignedOutLinks