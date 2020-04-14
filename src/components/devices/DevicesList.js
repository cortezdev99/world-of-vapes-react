import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import DevicesSummary from './DevicesSummary'
import DeleteDevices from './DeleteDevices'

class DeviceList extends Component {
  render() {
    const { devices, auth } = this.props

    if (auth.uid) {
      return (
        <div className="list-container">
          { devices && devices.map(device => {
            return (
              <div className="list-dashboard-delete" key={device.id}>
                <Link to={`/devices/${device.id}`} className="dashboard-link">
                  <DevicesSummary device={device}/>
                </Link>
      
                <div>
                  <DeleteDevices device={device}/>
                </div>
              </div>
            )
          })}
        </div>
      )
    }

    return (
      <div className="list-container">
        { devices && devices.map(device => {
          return (
            <Link to={`/devices/${device.id}`} key={device.id} className="dashboard-link">
              <DevicesSummary device={device}/>
            </Link>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(DeviceList)