import React from 'react'

import GlassSummary from './GlassSummary'

const GlassList = ({glasses}) => {
  return (
    <div className="list-container">
      { glasses && glasses.map(glass => {
        return (
        <GlassSummary glass={glass} key={glass.id}/>
        )
      })}
    </div>
  )
}

export default GlassList