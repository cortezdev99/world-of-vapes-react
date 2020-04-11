import React from 'react'

const DevicesSummary = ({device}) => {
  return (
    <div className="summary-div">
      <div className="img">
          <img src={device.url} alt="image" className="images" />
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