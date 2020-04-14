import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import DevicesList from './DevicesList'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class DevicesDashboard extends Component {
  render() {
    const { devices } = this.props
    console.log(devices)
    if (!devices) {
      return (
        <div className="auth-ready-container">
          <div className="loader"><FontAwesomeIcon icon="yin-yang" spin /></div>
          <div>Loading...</div>
        </div>
      )
    }

    return (
      <div className="list-dashboard-container">
        <DevicesList devices={devices}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    devices: state.firestore.ordered.devices,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'devices' }
  ])
)(DevicesDashboard)