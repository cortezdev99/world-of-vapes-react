import React from 'react'

const DevicesSummary = ({device}) => {
  return (
    <div className="summary-div">
      <div className="img">
          <p>Image goes here</p>
        </div>

        <div className="list-content">
          <p>{device.brand}</p>
          <p>{device.deviceTitle}</p>
          <p>{device.descript}</p>
        </div>
    </div>
  )
}

export default DevicesSummary