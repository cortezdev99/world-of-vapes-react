import React from 'react'

const DevicesSummary = ({device}) => {
  return (
    <div>
      <div className="img">
          <p>Image goes here</p>
        </div>

        <div className="list-content">
          <span>{device.brand}</span>
          <p>{device.deviceTitle}</p>
          <p>{device.descript}</p>
        </div>
    </div>
  )
}

export default DevicesSummary