import './ScheduleItem.scss'
import React, { FC, useMemo, useState } from 'react'
import cn from 'classnames'
import dayjs from 'dayjs'
import loc from 'dayjs/locale/ru'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import { ReactComponent as Ticket } from '../../../utils/img/ticket.svg'
<<<<<<< HEAD
=======
import { ReactComponent as Edit } from '../../../utils/img/edit.svg'

>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
import ScheduleTicket from '../ScheduleTicket/ScheduleTicket'
import SchedulePair from '../SchedulePair/SchedulePair'

// Utils
import uniquePair from '../../../utils/uniquePair'
import fixDayName from '../../../utils/fixDayName'
import { Schedule } from '../../../types'
<<<<<<< HEAD
=======
import { useUser } from '../../../hook/useUser'

// Custom hooks
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7

// Interface
interface Props {
  schedule: Schedule[]
}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ScheduleItem: FC<Props> = (props) => {
  const [ticketShow, setTicketShow] = useState<boolean>(false)
  const [extend, setExtend] = useState<boolean>(false)

<<<<<<< HEAD
=======
  const { user } = useUser()

>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
  const date = props.schedule[0]?.date

  const optionsPair = useMemo(() => uniquePair(props.schedule), [props.schedule])

  return (
    <>
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
          <div
            onClick={(e) => {
              console.log('ticket')
            }}
            className="schedule-header__ticket"
          >
<<<<<<< HEAD
            <Ticket
=======
            {extend && user.role === 'admin' && (
              <Edit
                onClick={(e: any) => {
                  if (ticketShow) return
                  setTicketShow(true)
                }}
              />
            )}
            {/* <Ticket
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
              onClick={(e: any) => {
                if (ticketShow) return
                setTicketShow(true)
              }}
<<<<<<< HEAD
            />
=======
            /> */}
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
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
      {ticketShow && <ScheduleTicket setShow={setTicketShow} />}
<<<<<<< HEAD
=======
      {/* {ticketEditShow && <ScheduleTicketEdit setShow={setTicketEditShow} />} */}
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
    </>
  )
}

export default ScheduleItem
