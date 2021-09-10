import './SchedulePair.scss'
import cn from 'classnames'
import React, { FC } from 'react'
import { Schedule } from '../../../types'

// Interface
interface Props {
  extend: boolean
  schedule: Schedule[]
}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SchedulePair: FC<Props> = (props) => {
  return (
    <div className={cn('schedule-pair', { extend: props.extend })}>
      <div className="schedule-pair__time">
        <div>11:50</div>
        <div>13:10</div>
      </div>
      <div className="schedule-pair__item">
        {props.schedule.length === 1 ? (
          <div>
            <div className="schedule-pair__hr v" />
            <div className="schedule-pair__type type-content">
              <div className="type-content__item">
                <div className="type-content__icon">{props.schedule[0].subgroup}</div>
                <div className="type-content__info">подгруппа</div>
              </div>
              <div className="type-content__item">
                <div className="type-content__icon">D</div>
                <div className="type-content__info">Discord</div>
              </div>
              <div className={cn('type-content__item additional', { extend: props.extend })}>
                <div className="type-content__audit">{props.schedule[0].cabinet}</div>
                <div className="type-content__info">Кабинет</div>
              </div>
            </div>
            <div className="schedule-pair__hr v" />
            <div className="schedule-pair__info">
              <div className="schedule-pair__name">{props.schedule[0].discipline}</div>
              <div className={cn('schedule-pair__teacher', { extend: props.extend })}>
                <div className="schedule-pair__hr h" />
                {props.schedule[0].teacher}
              </div>
            </div>
          </div>
        ) : (
          props.schedule.map((val, key) => {
            return (
              <>
                <div key={key}>
                  <div className="schedule-pair__hr v" />
                  <div className="schedule-pair__type type-content">
                    <div className="type-content__item">
                      <div className="type-content__icon">{val.subgroup}</div>
                      <div className="type-content__info">подгруппа</div>
                    </div>
                    <div className="type-content__item">
                      <div className="type-content__icon">D</div>
                      <div className="type-content__info">Discord</div>
                    </div>
                    <div className={cn('type-content__item additional', { extend: props.extend })}>
                      <div className="type-content__audit">{val.cabinet}</div>
                      <div className="type-content__info">Кабинет</div>
                    </div>
                  </div>
                  <div className="schedule-pair__hr v" />
                  <div className="schedule-pair__info">
                    <div className="schedule-pair__name">{val.discipline}</div>
                    <div className={cn('schedule-pair__teacher', { extend: props.extend })}>
                      <div className="schedule-pair__hr h" />
                      {val.teacher}
                    </div>
                  </div>
                </div>

                {key !== props.schedule.length - 1 && <div className="schedule-pair__hr h" />}
              </>
            )
          })
        )}
      </div>
    </div>
  )
}

export default SchedulePair

// <div>
//         <div className="schedule-pair__hr v" />
//         <div className="schedule-pair__type type-content">
//           <div className="type-content__item">
//             <div className="type-content__icon">1</div>
//             <div className="type-content__info">подгруппа</div>
//           </div>
//           <div className="type-content__item">
//             <div className="type-content__icon">D</div>
//             <div className="type-content__info">Discord</div>
//           </div>
//           <div className={cn('type-content__item additional', { extend: props.extend })}>
//             <div className="type-content__audit">124</div>
//             <div className="type-content__info">Кабинет</div>
//           </div>
//         </div>
//         <div className="schedule-pair__hr v" />
//         <div className="schedule-pair__info">
//           <div className="schedule-pair__name">История</div>
//           <div className={cn('schedule-pair__teacher', { extend: props.extend })}>
//             <div className="schedule-pair__hr h" />
//             Загуральская
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="schedule-pair__hr v" />
//         <div className="schedule-pair__type type-content">
//           <div className="type-content__item">
//             <div className="type-content__icon">1</div>
//             <div className="type-content__info">подгруппа</div>
//           </div>
//           <div className="type-content__item">
//             <div className="type-content__icon">D</div>
//             <div className="type-content__info">Discord</div>
//           </div>
//           <div className={cn('type-content__item additional', { extend: props.extend })}>
//             <div className="type-content__audit">124</div>
//             <div className="type-content__info">Кабинет</div>
//           </div>
//         </div>
//         <div className="schedule-pair__hr v" />
//         <div className="schedule-pair__info">
//           <div className="schedule-pair__name">История</div>
//           <div className={cn('schedule-pair__teacher', { extend: props.extend })}>
//             <div className="schedule-pair__hr h" />
//             Загуральская
//           </div>
//         </div>
//       </div>
