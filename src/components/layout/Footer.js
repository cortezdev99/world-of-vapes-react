import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Logo from '../../images/logo-images/worldofvape.png'
import Icons from '../helpers/icons'

const Footer = () => {
  Icons()
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="logo">
          <img src={Logo} alt="logo"/>
        </div>

        <div className="links">
          <div className="link">
            <Link exact to="/" >Homepage</Link>
          </div>

          <div className="link">
            <Link to="/devices" >Devices</Link>
          </div>

          <div className="link">
            <Link to="/juice" >Juice</Link>
          </div>

          <div className="link">
            <Link to="/glass" >Glass</Link>
          </div>
        </div>

        <div className="connect-with-us">
          <p>Connect With Us!</p>
        </div>

        <div className="social-media">
          <div className="facebook-icon">
            <a href="https://www.facebook.com/WorldOfVapesSLC/"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
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