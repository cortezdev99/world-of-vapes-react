import React from 'react'

const Navbar = () => {
  return (
    <div class="navbar-container">
      <div class="left-column">
        <div class="phone-icon-wrapper">
          <i class="fas fa-phone-volume"></i>
        </div>
        <div class="hours-number-wrapper">
          <div class="call-num">
            <p>Call!</p>
          </div>
          <a href="tel:8014327656" class="phone-num">(801)432-7656</a>
          <p>MON TO SAT: 9AM - 11PM</p>
          <p>SUN:  10AM - 10PM</p>
        </div>
      </div>

    <div class="center-column">
      <div class="logo">
        {/* <img src="logo-images/worldofvape.png" alt="logo"> */}
      </div>
    </div>


    <div class="right-column">
      <div class="address-wrapper">
        <div class="get-directions">
          <p>Get Directions!</p>
        </div>
        {/* <a id="address-link-google">4150 s Carriage Square<br>Taylorsville, Utah<br>84129</a> */}
      </div>
      
      <div class="map-icon-wrapper">
        <i class="fas fa-map-marker-alt"></i>
      </div>
    </div>
  </div>
  )
}

export default Navbar