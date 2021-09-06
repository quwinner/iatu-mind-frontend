import './ScheduleTime.scss'
import React, { FC, useEffect, useState } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ScheduleTime: FC<Props> = (props) => {
  // States
  const [seconds, setSeconds] = useState<number>(0)

  useEffect(() => {
    if (1000 - (seconds + 1) <= 0) {
      // props.handleReloadDaily()
      setSeconds(0)
    }

    setTimeout(() => setSeconds(seconds + 1), 1000)
  })

  return (
    <div className="schedule-time">
      До следующей пары {new Date((1000 - (seconds + 1)) * 1000).toISOString().substr(11, 8)}
    </div>
  )
}

export default ScheduleTime
