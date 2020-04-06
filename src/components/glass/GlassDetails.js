import React from 'react'

const GlassDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="details-container">
      <div className="img-details">
        <p>img goes here</p>
      </div>

      <div className="content-details">
        <p>Brand Title - {id}</p>
        <p>Descript</p>
      </div>
    </div>
  )
}

export default GlassDetails