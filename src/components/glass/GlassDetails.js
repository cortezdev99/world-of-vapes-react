import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const GlassDetails = (props) => {
  const { glass } = props
  if (!glass) return <div>Loading...</div>

  return (
    <div className="details-container">
      <div className="img-details">
        <img src={glass.url} alt="image" className="details-img"/>
      </div>

      <div className="content-details">
        <div className="default-info">
          <div className="group">
            <p className="brand">Brand</p>
            <p>{glass.brand}</p>
          </div>
        </div>

        <div className="dynamic-info">
          <p className="brand">Size</p>
          <p>{glass.size}</p>
        </div>

        <div className="descript">
          <div>
            <p className="brand">
              Description / Specs
            </p>
          </div>

          <div className="descript-div">
            <p className="descript-p">
              {glass.descript}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
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