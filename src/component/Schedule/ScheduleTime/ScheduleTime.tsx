import './ScheduleTime.scss'
import React, { FC, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import SchedulePair from '../SchedulePair/SchedulePair'

// Custom hook
import { useSchedule } from '../../../hook/useSchedule'
import { useApplication } from '../../../hook/useApplication'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ScheduleTime: FC<Props> = (props) => {
  // States
  const [seconds, setSeconds] = useState<number>(0)
  const [extend, setExtend] = useState<boolean>(false)

  const { schedule, getNextPair, nextPair } = useSchedule()
  const { groupNow } = useApplication()

  useEffect(() => {
    getNextPair(groupNow)
    // const d = dayjs(new Date()).format('YYYY.MM.DD')
    // const t = dayjs(new Date()).format('HH:mm')
    // const next = schedule.find((x) => {
    //   console.log(dayjs(x.date).format('YYYY.MM.DD'), '>=', d, x.timeStart, '<', t)
    //   return dayjs(x.date).format('YYYY.MM.DD') >= d && x.timeStart < t
    // })
    // console.log(dayjs().diff(next?.timeStart, 'second'))
  }, [schedule])

  useEffect(() => {
    if (nextPair[0]?.timeWait !== undefined && nextPair[0].timeWait - seconds <= 0) {
      setSeconds(0)
      getNextPair(groupNow)
    }

    setTimeout(() => setSeconds(seconds + 1), 1000)
  }, [seconds])

  return (
    <div onClick={(e) => setExtend(!extend)} className="schedule-time">
      <div className="schedule-time__header">
        <p>До следующей пары </p>
        <p>
          {nextPair[0]?.timeWait
            ? new Date((nextPair[0].timeWait - seconds) * 1000).toISOString().substr(11, 8)
            : 'неизвестно'}
        </p>
      </div>
      <div className={cn('schedule-next', { extend: extend })}>
        {nextPair[0]?.timeWait !== undefined && <SchedulePair extend={true} schedule={nextPair} />}
      </div>
    </div>
  )
}

export default ScheduleTime
