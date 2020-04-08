import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../images/logo-images/worldofvape.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="logo">
          <img src={Logo} alt="logo"/>
        </div>

        <div className="links">
          <div className="link">
            <Link to="/" >Homepage</Link>
          </div>

          <div className="link">
            <Link to="/" >Devices</Link>
          </div>

          <div className="link">
            <Link to="/" >Juice</Link>
          </div>

          <div className="link">
            <Link to="/" >Glass</Link>
          </div>
        </div>

        <div className="connect-with-us">
          <p>Connect With Us!</p>
        </div>

        <div className="social-media">
          <div className="facebook-icon">
            <a href="">icon</a>
          </div>
        </div>

        <div className="copyright">
          <p>© 2020 World of Vapes | All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer