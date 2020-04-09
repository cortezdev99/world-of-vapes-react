import React from 'react'

const JuiceSummary = ({ juice }) => {
  return (
    <div className="summary-div">
      <div className="img">
          <p>Image goes here</p>
        </div>

        <div className="list-content">
          <p className="brand">Brand</p>
          <p>{juice.brand}</p>
        </div>
    </div>
  )
}

export default JuiceSummary