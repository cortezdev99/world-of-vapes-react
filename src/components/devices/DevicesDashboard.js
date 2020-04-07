import React, { Component } from 'react'
import { connect } from 'react-redux'

import DevicesList from './DevicesList'

class DevicesDashboard extends Component {
  render() {
    const { devices } = this.props
    return (
      <div>
        <DevicesList devices={devices}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    devices: state.devices.devices
  }
}

export default connect(mapStateToProps)(DevicesDashboard)