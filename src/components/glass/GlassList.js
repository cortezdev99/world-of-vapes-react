import React from 'react'
import { Link } from 'react-router-dom'

import GlassSummary from './GlassSummary'

const GlassList = ({glasses}) => {
  return (
    <div className="list-container">
      { glasses && glasses.map(glass => {
        return (
          <Link to={`/glass/${glass.id}`} key={glass.id}>
            <GlassSummary glass={glass} />
          </Link>
        )
      })}
    </div>
  )
}

export default GlassList