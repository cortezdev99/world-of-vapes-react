import React from 'react'

const JuiceSummary = ({ juice }) => {
  return (
    <div>
      <div className="img">
          <p>Image goes here</p>
        </div>

        <div className="list-content">
          <span>{juice.brand}</span>
          <p>{juice.descript}</p>
        </div>
    </div>
  )
}

export default JuiceSummary