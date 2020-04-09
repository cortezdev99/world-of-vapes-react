import React from 'react'

const DevicesSummary = ({device}) => {
  return (
    <div className="summary-div">
      <div className="img">
          <p>Image goes here</p>
        </div>

        <div className="list-content">
          <p className="brand">Brand</p>
          <p>{device.brand}</p>
          <p className="brand">Device</p>
          <p>{device.deviceTitle}</p>
        </div>
    </div>
  )
}

export default DevicesSummary