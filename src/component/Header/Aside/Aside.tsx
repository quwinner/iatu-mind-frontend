import './Aside.scss'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import { ReactComponent as Schedule } from '../../../utils/img/schedule.svg'
import { ReactComponent as Dashboard } from '../../../utils/img/dashboard.svg'
import { ReactComponent as Arrow } from '../../../utils/img/arrow_left.svg'

// Custom hooks
import { useApplication } from '../../../hook/useApplication'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Aside: FC<Props> = (props) => {
  const { isAsideOpen, openAside, closeAside } = useApplication()

  return (
    <>
      <div
        className={cn('aside', { active: isAsideOpen })}
        onMouseLeave={(e: any) => closeAside()}
        onMouseEnter={(e: any) => openAside()}
      >
        <div className="nav-back">
          <Arrow onClick={(e) => window.scrollTo(0, 0)} className="nav-back__icon" />
        </div>
        <nav className={cn('nav-side', { active: isAsideOpen })}>
          <Link onClick={(e: any) => closeAside()} to={'/schedule'} className="nav-side__item link">
            <Schedule className="nav-side__icon" />
            <div className="nav-side__text">Расписание</div>
          </Link>
          <Link onClick={(e: any) => closeAside()} to={'/disciplines'} className="nav-side__item link">
            <Dashboard className="nav-side__icon" />
            <div className="nav-side__text">Предметы</div>
          </Link>
        </nav>
      </div>
      <div onClick={(e: any) => closeAside()} className={cn('background-blur', { active: isAsideOpen })}></div>
    </>
  )
}

export default Aside
