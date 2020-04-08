import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const DeviceDetails = (props) => {
  const { device } = props
    if (device) {
      return (
        <div className="details-container">
          <div className="img-details">
            <p>img goes here</p>
          </div>
    
          <div className="content-details">
            <p>{ device.brand }</p>
            <p>{ device.deviceTitle }</p>
            <p>{ device.descript }</p>
            { device.color1 ? <p>{ device.color1 }</p> : null}
            { device.color2 ? <p>{ device.color2 }</p> : null}
            { device.color3 ? <p>{ device.color3 }</p> : null}
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
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