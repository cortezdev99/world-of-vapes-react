import React, { Component } from 'react'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verified: false
    }
  }

  render() {

    const handleClickYes = () => {
      this.setState({
        verified: true
      })
    }

    if (this.state.verified === false) {
      return (
        <div id="myModal" className="modal">
            <div className="modal-content">
              <div className="header">
                <div className="certification">
                  <h1>Age Certification</h1>
                </div>
  
                <div className="certification">
                  <h2><strong>21+ ONLY</strong></h2>
                </div>
              </div>
  
  
              <div className="content">
                <p className="modal-text">
                  The products on this website are intended for adults only. <br></br> By selecting <strong className="verify">Yes</strong> you certify that you are at least 21 years old and of legal smoking age.
                </p>
              </div>
              <div className="verification">
                <div className="yesofage">
                  <button className="ysBtn" onClick={handleClickYes}>YES</button>
                </div>
          
                <div className="notofage">
                  <a href="https://google.com">
                    <button className="nBtn">NO</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Modal