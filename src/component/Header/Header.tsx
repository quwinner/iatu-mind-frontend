import './Header.scss'
import React, { FC } from 'react'
import { ReactComponent as MenuRight } from '../../utils/img/menu_white.svg'
import { ReactComponent as DownArrow } from '../../utils/img/expand_more_white.svg'
import { ReactComponent as ArrowForward } from '../../utils/img/arrow_forward.svg'

import Menu from './Menu/Menu'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Header: FC<Props> = (props) => {
  return (
    <header className="header">
      <ArrowForward className="header__btn" />
      <div className="header__tab">Расписание</div>
      <div className="profile-header">
        <div className="profile-header__group">АИСТбд-31</div>
        <DownArrow className="profile-header__downarrow" />
        <div className="profile-header__avatar">a</div>
        <div className="profile-header__menu">
          <MenuRight />
          {/* по другому не работает, ошибка хз где */}
        </div>
      </div>
    </header>
  )
}

export default Header
