import React, { Component } from 'react'
import { connect } from 'react-redux'

import JuiceList from './JuiceList'

class JuiceDashboard extends Component {
  render() {
    const { juices } = this.props
    return (
      <div>
        <JuiceList juices={juices} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    juices: state.juice.juices
  }
}

export default connect(mapStateToProps)(JuiceDashboard)