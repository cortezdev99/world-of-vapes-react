import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const DeviceDetails = (props) => {
  const { device } = props
    if (!device) return <div>Loading...</div>

  return (
      <div className="details-container">
        <div className="img-details">
          <img src={device.url} alt="image" className="details-img"/>
        </div>
  
        <div className="content-details">
          <div className="default-info">
            <div className="group">
              <p className="brand">Brand</p>
              <p>{ device.brand }</p>
            </div>

            <div className="group">
              <p className="brand">Device</p>
              <p>{ device.deviceTitle }</p>
            </div>
          </div>

          <div className="dynamic-info">
            <p className="brand">Colors</p>
            { device.color1 ? <p>{ device.color1 }</p> : null}
            { device.color2 ? <p>{ device.color2 }</p> : null}
            { device.color3 ? <p>{ device.color3 }</p> : null}
          </div>

          <div className="descript">
            <div>
              <p className="brand">Description / Specs</p>
            </div>

            <div className="descript-div">
              <p className="descript-p">{ device.descript }</p>
            </div>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const devices = state.firestore.data.devices;
  const device = devices ? devices[id] : null
  return {
    device: device
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : "devices" }
])
)(DeviceDetails)