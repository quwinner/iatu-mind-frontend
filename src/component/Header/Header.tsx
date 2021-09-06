import './Header.scss'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import Aside from './Aside/Aside'

import { ReactComponent as Notifications } from '../../utils/img/notifications.svg'
import { ReactComponent as DownArrow } from '../../utils/img/expand_more_white.svg'
import { ReactComponent as Logo } from '../../utils/img/logo.svg'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Header: FC<Props> = (props) => {
  return (
    <header className="header unselectable">
      <Logo className="header__btn" />
      <div className="header__tab">
        Расписание {/* Это стейтовое значение будет меняться в зависимости от вкладки */}
      </div>

      <div className="profile-header">
        <div className="profile-header__group">АИСТбд-31</div>
        {/* <Notifications /> */} {/* Не уверн что это нужно */}
        <Link className="profile-header__avatar" to={''}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/trick-a871a.appspot.com/o/image%2Fnoneavatar.jpg?alt=media&token=47945346-3fb8-408f-a0f4-fe28e8e3c18b"
            alt="nope"
          ></img>
        </Link>
        <DownArrow className="profile-header__downarrow" />
        {/* При нажатии выподает менюшка с пунктиками*/}
      </div>
    </header>
  )
}

export default Header
