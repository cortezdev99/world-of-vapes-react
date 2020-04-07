import React, { Component } from 'react'
import { connect } from 'react-redux'

import JuiceList from './JuiceList'

class JuiceDashboard extends Component {
  render() {
    return (
      <div>
        <JuiceList />
      </div>
    )
  }
}

export default connect()(JuiceDashboard)