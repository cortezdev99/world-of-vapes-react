import React from 'react'

const GlassSummary = ({glass}) => {
  return (
    <div>
      <div className="img">
          <p>Image goes here</p>
        </div>

        <div className="list-content">
          <span>{glass.brand}</span>
          <p>{glass.descript}</p>
        </div>
    </div>
  )
}

export default GlassSummary