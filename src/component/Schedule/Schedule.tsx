import './Schedule.scss'
import React, { FC, useEffect } from 'react'

import dayjs from 'dayjs'
import loc from 'dayjs/locale/ru'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import ScheduleItem from './ScheduleItem/ScheduleItem'
import ScheduleTime from './ScheduleTime/ScheduleTime'

import { ReactComponent as Arrow } from '../../utils/img/arrow_left.svg'
import axios from 'axios'

// Redux
import { useDispatch } from 'react-redux'
import { getSchedule } from '../../store/schedule.slice'
import { useApplication } from '../../hook/useApplication'
import { useSchedule } from '../../hook/useSchedule'
import Loading from '../Loading/Loading'
import { Schedule as ScheduleT } from '../../types'
import fixDayName from '../../utils/fixDayName'

// Interface
interface Props {}

const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Schedule: FC<Props> = (props) => {
  const { groupNow } = useApplication()
  const { isLoading, schedule, getSchedule } = useSchedule()
  const schedulePair = (schedule: ScheduleT[], dayName: string): ScheduleT[] =>
    schedule.filter((x) => x.dayName === dayName)

  useEffect(() => {
    getSchedule(groupNow)
  }, [groupNow])

  if (!isLoading)
    return (
      <div>
        <Loading />
      </div>
    )

  return (
    <section className="schedule unselectable">
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
      <div className="schedule-today">Сегодня {fixDayName(dayjs(Date.now()).locale(loc).format('D MMMM'))}</div>
      <ScheduleTime />
      <div className="schedule-content">
        {day.map((val, key) => {
          return <ScheduleItem key={key} schedule={schedulePair(schedule, val)} />
        })}
      </div>
    </section>
  )
}

export default Schedule
