import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import GlassSummary from './GlassSummary'
import DeleteGlass from './DeleteGlass'

class GlassList extends Component {
  render() {
    const { glasses, auth } = this.props
    if (!auth.uid) {
      return (
        <div className="list-container">
          { glasses && glasses.map(glass => {
            return (
              <Link to={`/glass/${glass.id}`} key={glass.id} className="dashboard-link">
                <GlassSummary glass={glass} />
              </Link>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className="list-container">
          { glasses && glasses.map(glass => {
            return (
              <div className="list-dashboard-delete" key={glass.id}>
                <Link to={`/glass/${glass.id}`} key={glass.id} className="dashboard-link">
                  <GlassSummary glass={glass} />
                </Link>

                <div>
                  <DeleteGlass glass={glass} />
                </div>
              </div>
            )
          })}
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(GlassList)