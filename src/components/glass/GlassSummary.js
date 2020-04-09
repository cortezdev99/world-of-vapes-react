import React from 'react'

const GlassSummary = ({glass}) => {
  return (
    <div className="summary-div">
      <div className="img">
          <p>Image goes here</p>
        </div>

        <div className="list-content">
          <p className="brand">Brand</p>
          <p>{glass.brand}</p>
        </div>
    </div>
  )
}

export default GlassSummary