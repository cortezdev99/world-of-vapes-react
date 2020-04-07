import React, { Component } from 'react'
import { connect } from 'react-redux'

import GlassList from './GlassList'

class GlassDashboard extends Component {
  render() {
    return (
      <div>
        <GlassList />
      </div>
    )
  }
}

export default connect()(GlassDashboard)