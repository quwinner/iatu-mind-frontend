import './Menu.scss'
import React, { FC } from 'react'
import classNames from 'classnames'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Menu: FC<Props> = (props) => {
  return (
    <div className="wrapper">
      <div className="menu">
        <nav className="menu__list">
          <div className="menu__list_item">asd</div>
          <div className="menu__list_item">asd</div>
          <div className="menu__list_item">asd</div>
          <div className="menu__list_item">asd</div>
        </nav>
      </div>
    </div>
  )
}

export default Menu
