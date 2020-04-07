import React from 'react'

import JuiceSummary from './JuiceSummary'

const JuiceList = ({juices}) => {
  return (
    <div className="list-container">
      { juices && juices.map(juice => {
        return (
        <JuiceSummary juice={juice} key={juice.id}/>
        )
      })}
    </div>
  )
}

export default JuiceList