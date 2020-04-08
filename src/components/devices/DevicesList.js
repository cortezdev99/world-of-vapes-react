import React from 'react'
import { Link } from 'react-router-dom'

import DevicesSummary from './DevicesSummary'

const DeviceList = ({devices}) => {
  return (
    <div className="list-container">
      { devices && devices.map(device => {
        return (
          <Link to={`/devices/${device.id}`} key={device.id}>
            <DevicesSummary device={device}/>
          </Link>
        )
      })}
    </div>
  )
}

export default DeviceList