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
import { Schedule } from '../../../types'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ScheduleTime: FC<Props> = (props) => {
  // States
  const [seconds, setSeconds] = useState<number>(0)
  const [extendNext, setExtendNext] = useState<boolean>(false)
  const [extendNow, setExtendNow] = useState<boolean>(false)

  const { schedule, getNextPair, nextPair, nowPair } = useSchedule()
  const { groupNow } = useApplication()

  const validateNowPair = (pair: Schedule): boolean => {
    const timeNow = dayjs(new Date()).format('HH:mm:ss')

    if (pair === undefined) return false
    return pair.timeStop > timeNow && timeNow < pair.timeStop
  }

  useEffect(() => {
    getNextPair(groupNow)
    setSeconds(0)

    // console.log(nextPair[0]?.timeStart, dayjs(new Date()).format('HH:mm'), nextPair[0]?.timeStop)

    // const d = dayjs(new Date()).format('YYYY.MM.DD')
    // const t = dayjs(new Date()).format('HH:mm')
    // const next = schedule.find((x) => {
    //   console.log(dayjs(x.date).format('YYYY.MM.DD'), '>=', d, x.timeStart, '<', t)
    //   return dayjs(x.date).format('YYYY.MM.DD') >= d && x.timeStart < t
    // })
    // console.log(dayjs().diff(next?.timeStart, 'second'))
    // console.log(nextPair, nowPair)
  }, [groupNow])

  useEffect(() => {
    if (nextPair[0]?.timeWait !== undefined && nextPair[0].timeWait - seconds <= 0) {
      setSeconds(0)
      getNextPair(groupNow)
    }

    setTimeout(() => setSeconds(seconds + 1), 1000)
  }, [seconds])

  return (
    <div className="schedule-time">
      <hr className="schedule-time__hr" />
      <div onClick={(e) => setExtendNext(!extendNext)} className="schedule-time__header">
        <span className="schedule-time-span base">До следующей пары </span>
        <span className="schedule-time-span darker time">
          {nextPair[0]?.timeWait
            ? new Date((nextPair[0].timeWait - seconds) * 1000).toISOString().substr(11, 8)
            : 'неизвестно'}
        </span>
      </div>
      <div className={cn('schedule-next', { extend: extendNext })}>
        {nextPair[0]?.timeWait !== undefined && <SchedulePair extend={true} schedule={nextPair} />}
      </div>
      {validateNowPair(nowPair[0]) && (
        <>
          <div onClick={(e) => setExtendNow(!extendNow)} className="schedule-time__header">
            <span className="schedule-time-span base">До окончания пары </span>
            <span className="schedule-time-span darker time">
              {nowPair[0]?.timeWait ? new Date((nowPair[0].timeWait - seconds) * 1000).toISOString().substr(11, 8) : ''}
            </span>
          </div>
          <div className={cn('schedule-next', { extend: extendNow })}>
            {nowPair[0]?.timeWait !== undefined && <SchedulePair extend={true} schedule={nowPair} />}
          </div>
        </>
      )}
    </div>
  )
}

export default ScheduleTime
