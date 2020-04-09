import React from 'react'

const JuiceSummary = ({ juice }) => {
  return (
    <div className="summary-div">
      <div className="img">
          <p>Image goes here</p>
        </div>

        <div className="list-content">
          <p>{juice.brand}</p>
          <p>{juice.descript}</p>
        </div>
    </div>
  )
}

export default JuiceSummary