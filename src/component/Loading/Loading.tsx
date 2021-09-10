import './Loading.scss'
import React, { FC } from 'react'

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Loading: FC<any> = () => {
  return (
    <div className="loading">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  )
}

export default Loading
