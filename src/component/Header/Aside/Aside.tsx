import './Aside.scss'
import React, { FC, useState } from 'react'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import { ReactComponent as Schedule } from '../../../utils/img/schedule.svg'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Aside: FC<Props> = (props) => {
  const [state, setState] = useState(false)

  return (
    <>
      <div onMouseLeave={(e: any) => setState(false)} onMouseEnter={(e: any) => setState(true)} className="aside">
        {/* <hr className="nav-hr"></hr> */}
        <nav className="nav-side">
          <div className="nav-side__item">
            <Schedule className="nav-side__icon" />
            <div className="nav-side__text">Расписание</div>
          </div>
          <div className="nav-side__item">
            <Schedule className="nav-side__icon" />
            <div className="nav-side__text">Расписание</div>
          </div>
          <div className="nav-side__item">
            <Schedule className="nav-side__icon" />
            <div className="nav-side__text">Расписание</div>
          </div>
          <div className="nav-side__item">
            <Schedule className="nav-side__icon" />
            <div className="nav-side__text">Расписание</div>
          </div>
        </nav>
      </div>
      <div className={cn('background-blur', { active: state })}></div>
    </>
  )
}

export default Aside
