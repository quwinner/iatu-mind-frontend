import './ScheduleItem.scss'
import React, { FC, useMemo, useState } from 'react'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import SchedulePair from '../SchedulePair/SchedulePair'
import { Schedule } from '../../../types'
import uniquePair from '../../../utils/uniquePair'

// Utils

// Interface
interface Props {
  date: any
}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ScheduleItem: FC<Props> = (props) => {
  const [extend, setExtend] = useState<boolean>(false)

  const optionsPair = useMemo(() => uniquePair(schedule), [schedule])

  return (
    <div onClick={(e) => setExtend(!extend)} className={cn('schedule-item', { active: false }, { extend: extend })}>
      <div className="schedule-header">
        <div className="schedule-header__dayname">Понедельник</div>
        <div className="schedule-header__date">7 Сентября</div>
      </div>
      {optionsPair.map((x, key) => {
        return (
          <>
            <hr className="schedule-pair__hr h" />
            <SchedulePair
              extend={extend}
              schedule={schedule.filter((y, key) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                return y.time_start === x
              })}
            />
          </>
        )
      })}
    </div>
  )
}

export default ScheduleItem

const schedule: Schedule[] = [
  {
    time_start: '8:00',
    time_end: '13:00',
    group: '0',
    type: 'лекция',
    cab: '132',
    discipline: 'История',
    prepod: 'Черненькая Елена Владимировна',
  },
  {
    time_start: '13:00',
    time_end: '15:00',
    group: '1',
    type: 'лекция',
    cab: '132',
    discipline: 'Элективные курсы по физической культуре и спорту',
    prepod: 'Черненькая Елена Владимировна',
  },
  {
    time_start: '13:00',
    time_end: '15:00',
    group: '2',
    type: 'лекция',
    cab: '132',
    discipline: 'Элективные курсы по физической культуре и спорту',
    prepod: 'Черненькая Елена Владимировна',
  },
  {
    time_start: '15:00',
    time_end: '17:00',
    group: '0',
    type: 'лекция',
    cab: '132',
    discipline: 'Химия',
    prepod: 'Черненькая Елена Владимировна',
  },
]
function classnames(arg0: string, arg1: { active: boolean }, arg2: { extend: boolean }): string | undefined {
  throw new Error('Function not implemented.')
}
