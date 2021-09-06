import './Schedule.scss'
import React, { FC } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import ScheduleItem from './ScheduleItem/ScheduleItem'
import ScheduleTime from './ScheduleTime/ScheduleTime'

import { ReactComponent as Arrow } from '../../utils/img/arrow_left.svg'

// Interface
interface Props {}

const schedule = [1, 2, 3, 4, 5, 6]

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Schedule: FC<Props> = (props) => {
  return (
    <section className="schedule">
      <div className="schedule-date">
        <div className="schedule-arrow-pagination">
          <Arrow className="schedule-arrow-pagination__icon back" />
          <div className="schedule-arrow-pagination__text">Предыдущая неделя</div>
        </div>
        <div className="schedule-date__header">6 Сентября - 10 Сентября</div>
        <div className="schedule-arrow-pagination">
          <div className="schedule-arrow-pagination__text">Следующая неделя</div>
          <Arrow className="schedule-arrow-pagination__icon next" />
        </div>
      </div>
      <div className="schedule-today">Сегодня 5 Сентября</div>
      <ScheduleTime />
      <div className="schedule-content">
        {schedule.map((val, key) => {
          return <ScheduleItem key={key} date={val} />
        })}
      </div>
    </section>
  )
}

export default Schedule
