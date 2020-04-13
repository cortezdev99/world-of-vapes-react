import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import slide1 from '../../images/logo-images/26756251_1873079179649603_4166569873830448498_o.jpg'
import slide2 from '../../images/logo-images/27912777_1883853358572185_2027341723001519021_o.jpg'
import slide3 from '../../images/logo-images/21462252_1819656434991878_7323414897475794928_n.jpg'
import slide4 from '../../images/logo-images/18921834_1780181655606023_254700353966457051_n.jpg'
import slide5 from '../../images/logo-images/20992642_1814290458861809_8490681797604641240_n.jpg'

import brand1 from '../../images/brands-images/wotofo.jpg'
import brand2 from '../../images/brands-images/wismec.jpg'
import brand3 from '../../images/brands-images/voopoo.jpg'
import brand4 from '../../images/brands-images/vandy_vape.jpg'
import brand5 from '../../images/brands-images/snowwolf.jpg'
import brand6 from '../../images/brands-images/smok.jpg'
import brand7 from '../../images/brands-images/pachamama.jpg'
import brand8 from '../../images/brands-images/naked_100.jpg'
import brand9 from '../../images/brands-images/lost_vape.jpg'
import brand10 from '../../images/brands-images/innokin.jpg'
import brand11 from '../../images/brands-images/humble_juice_co.jpg'
import brand12 from '../../images/brands-images/hellvape.jpg'

class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      index: 0
    }
  }
  render() {
    const slideshowList = [slide1, slide2, slide3, slide4, slide5]

    const handleSlideLeftClick = () => {
      if (this.state.index === 0) {
        return (
          this.setState({
            index: slideshowList.length - 1
          }) 
        )
      } else {
        return (
          this.setState({
            index: this.state.index - 1
            })
          )
      }
    }

    const handleSlideRightClick = () => {
      if (this.state.index === slideshowList.length - 1) {
        return this.setState({
          index: 0
        })
      } else {
        return this.setState({
          index: this.state.index + 1
        })
      }
    }
    return (
      <div className="dashboard-container">
        <div className="slideshow-container">
          <div className="mySlides">
            <img src={slideshowList[this.state.index]} alt="logo"/>
          </div>

          <div className="slideshow-buttons">
            <button className="chevron" onClick={handleSlideLeftClick}><FontAwesomeIcon icon="chevron-circle-left" /></button>
            <button className="chevron" onClick={handleSlideRightClick}><FontAwesomeIcon icon="chevron-circle-right" /></button>
          </div>
        </div>

        <div className="featured-brands">
          <p>Featured Brands!</p>
        </div>

        <div className="brands-slideshow-container">
          <div className="brands-container">
            <div className="brand-group">
              <div className="brands">
                <div className="brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand1} alt="img"/>
                </div>
              </div>

              <div className="brands">
                <div className="brand-item bottom-brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand2} alt="img"/>
                </div>
              </div>
            </div>

            <div className="brand-group">
              <div className="brands">
                <div className="brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand3} alt="img"/>
                </div>
              </div>

              <div className="brands">
                <div className="brand-item bottom-brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand4} alt="img"/>
                </div>
              </div>
            </div>

            <div className="brand-group">
              <div className="brands">
                <div className="brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand5} alt="img"/>
                </div>
              </div>

              <div className="brands">
                <div className="brand-item bottom-brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand6} alt="img"/>
                </div>
              </div>
            </div>

            <div className="brand-group">
              <div className="brands">
                <div className="brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand7} alt="img"/>
                </div>
              </div>

              <div className="brands">
                <div className="brand-item bottom-brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand8} alt="img"/>
                </div>
              </div>
            </div>

            <div className="brand-group">
              <div className="brands">
                <div className="brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand9} alt="img"/>
                </div>
              </div>

              <div className="brands">
                <div className="brand-item bottom-brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand10} alt="img"/>
                </div>
              </div>
            </div>

            <div className="brand-group last-brand-group">
              <div className="brands">
                <div className="brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand11} alt="img"/>
                </div>
              </div>

              <div className="brands">
                <div className="brand-item bottom-brand-item">
                  <a href="#" className="brand-link"></a>
                  <img src={brand12} alt="img"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="googlemaps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.686725226506!2d-111.94323618467232!3d40.68087104745639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528b8349761533%3A0x3e62dacdc03ca41a!2sWorld%20Of%20Vapes!5e0!3m2!1sen!2sus!4v1582389643496!5m2!1sen!2sus"></iframe>
        </div>
      </div>
    )
  }
}

export default Dashboard