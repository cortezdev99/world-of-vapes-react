import React from 'react'

const DeviceDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="details-container">
      <div className="img-details">
        <p>img goes here</p>
      </div>

      <div className="content-details">
        <p>Device Title - {id}</p>
        <p>Colors</p>
        <p>Descript</p>
      </div>
    </div>
  )
}

export default DeviceDetails