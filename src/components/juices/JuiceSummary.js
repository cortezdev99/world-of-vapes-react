import React from 'react'

const JuiceSummary = ({ juice }) => {
  return (
    <div className="summary-div">
      <div className="img">
          <img src={juice.url} alt="image" className="images" />
        </div>

        <div className="list-content">
          <p className="brand">Brand</p>
          <p>{juice.brand}</p>
        </div>
    </div>
  )
}

export default JuiceSummary