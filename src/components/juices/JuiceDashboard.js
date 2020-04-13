import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import JuiceList from './JuiceList'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class JuiceDashboard extends Component {
  render() {
    const { juices } = this.props

    if (!juices) {
      return (
      <div className="auth-ready-container">
        <div className="loader"><FontAwesomeIcon icon="yin-yang" spin /></div>
        <div>Loading...</div>
      </div>
      )
    }

    return (
      <div className="list-dashboard-container">
        <JuiceList juices={juices} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    juices: state.firestore.ordered.juices
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'juices' }
  ])
)(JuiceDashboard)