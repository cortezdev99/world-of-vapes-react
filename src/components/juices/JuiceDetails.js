import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const JuiceDetails = (props) => {
  const { juice } = props
  if (!juice) return <div>Loading...</div>

  return (
    <div className="details-container">
      <div className="img-details">
        <img src={juice.url} alt="image" className="details-img"/>
      </div>

      <div className="content-details">
        <div className="default-info">
          <div className="group">
            <p className="brand">Brand</p>
            <p>{juice.brand}</p>
          </div>
        </div>

        <div className="dynamic-info">
          <p className="brand">Colors</p>
          { juice.flavor1 ? <p>{juice.flavor1}</p> : null }
          { juice.flavor2 ? <p>{juice.flavor2}</p> : null }
          { juice.flavor3 ? <p>{juice.flavor3}</p> : null }
        </div>

        <div className="descript">
          <div>
            <p className="brand">Description</p>
          </div>

          <div className="descript-div">
            <p className="descript-p">
              {juice.descript}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const juices = state.firestore.data.juices;
  const juice = juices ? juices[id] : null
  return {
    juice: juice
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : "juices" }
])
)(JuiceDetails)