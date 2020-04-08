import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const GlassDetails = (props) => {
  const { glass } = props
  if (glass) {
    return (
      <div className="details-container">
        <div className="img-details">
          <p>img goes here</p>
        </div>
  
        <div className="content-details">
          <p>{glass.brand}</p>
          <p>{glass.descript}</p>
          <p>{glass.size}</p>
        </div>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}


const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const glasses = state.firestore.data.glass;
  const glass = glasses ? glasses[id] : null
  return {
    glass: glass
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : "glass" }
])
)(GlassDetails)