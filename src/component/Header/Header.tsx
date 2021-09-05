import './Header.scss'
import React, { FC } from 'react'
import menu from '../../utils/img/menu_black_24dp.svg'
// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Header: FC<Props> = (props) => {
  return (
    <header className="header">
      <div className="header__menu">
        <img src={menu} alt="menu" />
      </div>
      <div className="header__logo">IATU-MIND</div>
    </header>
  )
}

export default Header
