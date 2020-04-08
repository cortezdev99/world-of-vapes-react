import React from 'react'
import { Link } from 'react-router-dom'

import JuiceSummary from './JuiceSummary'

const JuiceList = ({juices}) => {
  return (
    <div className="list-container">
      { juices && juices.map(juice => {
        return (
          <Link to={`/juices/${juice.id}`} key={juice.id}>
            <JuiceSummary juice={juice}/>
          </Link>
        )
      })}
    </div>
  )
}

export default JuiceList