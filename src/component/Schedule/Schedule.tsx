import './Schedule.scss'
import React, { FC } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import ScheduleItem from './ScheduleItem/ScheduleItem'

// Interface
interface Props {}

const schedule = [1, 2, 3, 4, 5, 6]

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Schedule: FC<Props> = (props) => {
  return (
    <section className="schedule">
      <div className="schedule__date">DATE</div>
      <div className="schedule__content">
        {schedule.map((val, key) => {
          return <ScheduleItem item={val} />
        })}
      </div>
    </section>
  )
}

export default Schedule
