import './ScheduleItem.scss'
import React, { FC, useMemo, useState } from 'react'
import cn from 'classnames'
import dayjs from 'dayjs'
import loc from 'dayjs/locale/ru'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import { ReactComponent as Ticket } from '../../../utils/img/ticket.svg'

import SchedulePair from '../SchedulePair/SchedulePair'

// Utils
import uniquePair from '../../../utils/uniquePair'
import fixDayName from '../../../utils/fixDayName'
import { Schedule } from '../../../types'

// Interface
interface Props {
  schedule: Schedule[]
}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ScheduleItem: FC<Props> = (props) => {
  const [extend, setExtend] = useState<boolean>(false)

  const date = props.schedule[0]?.date

  const optionsPair = useMemo(() => uniquePair(props.schedule), [props.schedule])

  return (
    <div
      onClick={(e) => setExtend(!extend)}
      className={cn(
        'schedule-item',
        { active: dayjs(Date.now()).date() === dayjs(date).date() && date },
        { extend: extend }
      )}
    >
      <div className="schedule-header">
        <div className="schedule-header__dayname">
          {date ? fixDayName(dayjs(date).locale(loc).format('dddd')) : '---'}
        </div>
        <div className="schedule-header__date">{date ? dayjs(date).locale(loc).format('D MMMM') : '---'}</div>
        <div className="schedule-header__ticket">
          <Ticket />
        </div>
      </div>
      {optionsPair.map((x, key) => {
        return (
          <>
            <hr key={key} className="schedule-pair__hr h" />
            <SchedulePair
              key={key}
              extend={extend}
              schedule={props.schedule.filter((y, key) => {
                return y.timeStart === x
              })}
            />
          </>
        )
      })}
    </div>
  )
}

export default ScheduleItem
