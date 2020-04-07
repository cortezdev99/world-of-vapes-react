import React, { Component } from 'react'
import { connect } from 'react-redux'

import GlassList from './GlassList'

class GlassDashboard extends Component {
  render() {
    const { glass } = this.props
    return (
      <div>
        <GlassList glasses={glass}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    glass: state.glass.glass
  }
}

export default connect(mapStateToProps)(GlassDashboard)