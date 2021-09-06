import './Header.scss'
import React, { FC } from 'react'
import { ReactComponent as Menu } from '../../utils/img/menu_white.svg'
import { ReactComponent as DownArrow } from '../../utils/img/expand_more_white.svg'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Header: FC<Props> = (props) => {
  return (
    <header className="header">
      <div className="header__tab">Расписание</div>
      <div className="profile-header">
        <div className="profile-header__group">АИСТбд-31</div>
        <div className="profile-header__downarrow">
          <DownArrow />
        </div>
        <div className="profile-header__avatar">a</div>
        <div className="profile-header__menu">
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header
