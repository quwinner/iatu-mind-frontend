import './DisciplinesItem.scss'
import React, { FC } from 'react'
import Back from '../../utils/img/here.png'
import Gray from '../../utils/img/gray_blur.png'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component

import { ReactComponent as History } from '../../../utils/img/history.svg'

import { ReactComponent as Task } from '../../../utils/img/task.svg'
import { ReactComponent as Answer } from '../../../utils/img/answer.svg'
import { ReactComponent as Update } from '../../../utils/img/update.svg'

// Interface
interface Props {
  discipline: any
}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DisciplinesItem: FC<Props> = (props) => {
  return (
    <div className="discipline-content">
      <div className="discipline-content__info info-item">
        <History className="info-item__icon" />
        <div className="info-item__name">{props.discipline.name}</div>
      </div>

      <div className="discipline-content__hr" />
      <div className="discipline-content__tip tip-item">
        <div className="tip-item">
          <Task className="tip-item__icon" />
          <div className="tip-item__value">0</div>
        </div>
        <div className="tip-item">
          <Answer className="tip-item__icon" />
          <div className="tip-item__value">0</div>
        </div>
        <div className="tip-item last">
          <div className="tip-item__value">5 дней назад</div>
          <Update className="tip-item__icon" />
        </div>
      </div>
    </div>
  )
}

export default DisciplinesItem
