import React from 'react'

import DevicesSummary from './DevicesSummary'

const DeviceList = ({devices}) => {
  return (
    <div className="list-container">
      { devices && devices.map(device => {
        return (
          <DevicesSummary device={device} key={device.id}/>
        )
      })}
    </div>
  )
}

export default DeviceList