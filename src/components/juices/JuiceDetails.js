import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const JuiceDetails = (props) => {
  const id = props.match.params.id
  console.log(props)
  const { juice } = props
  if (juice) {
    return (
      <div className="details-container">
        <div className="img-details">
          <p>img goes here</p>
        </div>
  
        <div className="content-details">
          <p>{juice.brand}</p>
          <p>{juice.descript}</p>
          { juice.flavor1 ? <p>{juice.flavor1}</p> : null }
          { juice.flavor2 ? <p>{juice.flavor2}</p> : null }
          { juice.flavor3 ? <p>{juice.flavor3}</p> : null }
        </div>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
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