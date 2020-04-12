import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import DevicesList from './DevicesList'

class DevicesDashboard extends Component {
  render() {
    const { devices, auth } = this.props
    if (!devices) {
      return <div className="auth-ready-container"><p>Loading...</p></div>
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