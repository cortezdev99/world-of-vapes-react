import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import GlassList from './GlassList'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class GlassDashboard extends Component {
  render() {
    const { glass } = this.props

    if (!glass) {
      return (
        <div className="auth-ready-container">
          <div className="loader"><FontAwesomeIcon icon="yin-yang" spin /></div>
          <div>Loading...</div>
        </div>
      )
    }

    return (
      <div className="list-dashboard-container">
        <GlassList glasses={glass}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    glass: state.firestore.ordered.glass
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'glass'}
  ])
)(GlassDashboard)