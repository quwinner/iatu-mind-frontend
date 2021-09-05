import './ScheduleItem.scss'
import React, { FC } from 'react'

// Interface
interface Props {
  item: any
}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ScheduleItem: FC<Props> = (props) => {
  return (
    <div className="schedule-item">
      <div className="schedule-header">
        <div className="schedule-header__dayname">Понедельник</div>
        <div className="schedule-header__date">7 Сентября</div>
      </div>

      <div className="schedule-pair">
        <div className="schedule-pair__time">
          <div>11:50</div>
          <div>13:10</div>
        </div>
        <div className="schedule-pair__hr v" />
        <div className="schedule-pair__type">
          <div>A</div>
          <div>B</div>
        </div>
        <div className="schedule-pair__hr v" />
        <div className="schedule-pair__name">История</div>
      </div>
      <hr className="schedule-pair__hr h" />
      <div className="schedule-pair">
        <div className="schedule-pair__time">
          <div>11:50</div>
          <div>13:10</div>
        </div>
        <div className="schedule-pair__hr v" />
        <div className="schedule-pair__type type-content">
          <div className="type-content__icon">1</div>
          <div className="type-content__icon">D</div>
        </div>
        <div className="schedule-pair__hr v" />
        <div className="schedule-pair__name">История</div>
      </div>

      <hr className="schedule-pair__hr h" />
      <div className="schedule-pair">
        <div className="schedule-pair__time">
          <div>11:50</div>
          <div>13:10</div>
        </div>
        <div className="schedule-pair__hr v" />
        <div className="schedule-pair__type">
          <div>A</div>
          <div>B</div>
        </div>
        <div className="schedule-pair__hr v" />
        <div className="schedule-pair__name">История</div>
      </div>
    </div>
  )
}

export default ScheduleItem
