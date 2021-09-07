import './Aside.scss'
import React, { FC, useState } from 'react'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import { ReactComponent as Schedule } from '../../../utils/img/schedule.svg'
import { ReactComponent as Dashboard } from '../../../utils/img/dashboard.svg'
import { Link } from 'react-router-dom'

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
          <Link onClick={(e: any) => setState(false)} to={'/schedule'} className="nav-side__item link">
            <Schedule className="nav-side__icon" />
            <div className="nav-side__text">Расписание</div>
          </Link>
          <Link onClick={(e: any) => setState(false)} to={'/disciplines'} className="nav-side__item link">
            <Dashboard className="nav-side__icon" />
            <div className="nav-side__text">Предметы</div>
          </Link>
        </nav>
      </div>
      <div className={cn('background-blur', { active: state })}></div>
    </>
  )
}

export default Aside
