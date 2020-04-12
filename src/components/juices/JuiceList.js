import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import JuiceSummary from './JuiceSummary'
import DeleteJuice from './DeleteJuice'

class JuiceList extends Component {
  render() {
    const { juices, auth } = this.props

    if (auth.uid) {
      return (
        <div className="list-container">
          { juices && juices.map(juice => {
            return (
              <div className="list-dashboard-delete" key={juice.id}>
                <Link to={`/juices/${juice.id}`} key={juice.id} className="dashboard-link">
                  <JuiceSummary juice={juice}/>
                </Link>

                <div>
                  <DeleteJuice juice={juice} />
                </div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className="list-container">
          { juices && juices.map(juice => {
            return (
              <Link to={`/juices/${juice.id}`} key={juice.id} className="dashboard-link">
                <JuiceSummary juice={juice}/>
              </Link>
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

export default connect(mapStateToProps)(JuiceList)