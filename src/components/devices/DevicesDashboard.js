import React, { Component } from 'react'
import { connect } from 'react-redux'

import DevicesList from './DevicesList'

class DevicesDashboard extends Component {
  render() {
    return (
      <div>
        <DevicesList />
      </div>
    )
  }
}

export default connect()(DevicesDashboard)