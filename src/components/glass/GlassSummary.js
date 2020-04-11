import React from 'react'

const GlassSummary = ({glass}) => {
  return (
    <div className="summary-div">
      <div className="img">
          <img src={glass.url} alt="image" className="images" />
        </div>

        <div className="list-content">
          <p className="brand">Brand</p>
          <p>{glass.brand}</p>
        </div>
    </div>
  )
}

export default GlassSummary