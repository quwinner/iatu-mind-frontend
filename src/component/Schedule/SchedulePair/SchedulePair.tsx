import './SchedulePair.scss'
import cn from 'classnames'
import React, { FC } from 'react'
import { Schedule } from '../../../types'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import PairType from './PairType/PairType'

import { ReactComponent as Discord } from '../../../utils/img/discord.svg'

// Interface
interface Props {
  extend: boolean
  schedule: Schedule[]
}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SchedulePair: FC<Props> = (props) => {
  if (!props.schedule[0]?.timeStart) {
    return (
      <div className="schedule-pair">
        <span className="schedule-pair__none">Пар нету</span>
      </div>
    )
  }

  return (
    <div className={cn('schedule-pair', { extend: props.extend })}>
      <div className="schedule-pair__time">
        <div>{props.schedule[0].timeStart.substring(0, 5)}</div>
        <div>{props.schedule[0].timeStop.substring(0, 5)}</div>
      </div>
      <div className="schedule-pair__item">
        {props.schedule.length === 1 ? (
          <div>
            <div className="schedule-pair__hr v" />
            <div className="schedule-pair__type type-content">
              <div className="type-content__item">
                <div className="type-content__icon">
                  <div>{props.schedule[0].subgroup === '0' ? <div>Все</div> : props.schedule[0].subgroup}</div>
                </div>
                <div className="type-content__info">
                  {props.schedule[0].subgroup === '0' ? 'подгруппы' : 'подгруппа'}
                </div>
              </div>
              <PairType schedule={props.schedule[0]} />

              <div className={cn('type-content__item additional', { extend: props.extend })}>
                <div className="type-content__audit">
                  {props.schedule[0].cabinet !== 'Discord' ? props.schedule[0].cabinet.substring(0, 4) : <Discord />}
                </div>
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
          props.schedule.map((val, key, arr) => {
            return (
              <>
                <div key={key}>
                  <div className="schedule-pair__hr v" />
                  <div className="schedule-pair__type type-content">
                    <div className="type-content__item">
                      <div className="type-content__icon">{val.subgroup === '0' ? <div>Все</div> : val.subgroup}</div>
                      <div className="type-content__info"> {val.subgroup === '0' ? 'подгруппы' : 'подгруппа'}</div>
                    </div>
                    <PairType schedule={val} />
                    <div className={cn('type-content__item additional', { extend: props.extend })}>
                      <div className="type-content__audit">
                        {val.cabinet !== 'Discord' ? val.cabinet.substring(0, 4) : <Discord />}
                      </div>
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

                {key !== arr.length - 1 && <div className="schedule-pair__hr h" />}
              </>
            )
          })
        )}
      </div>
    </div>
  )
}

export default SchedulePair
