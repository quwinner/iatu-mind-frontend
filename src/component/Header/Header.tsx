import './Header.scss'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import Aside from './Aside/Aside'
import Profile from './Profile/Profile'
import GroupSelector from './GroupSelector/GroupSelector'
import SearchBar from './SearchBar/SearchBar'

import { ReactComponent as Menu } from '../../utils/img/menu.svg'

// Custom hooks
import { useApplication } from '../../hook/useApplication'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Header: FC<Props> = (props) => {
  const { isAsideOpen, openAside, closeAside } = useApplication()

  return (
    <header className="header unselectable">
      <Menu
        onClick={(e) => {
          isAsideOpen ? closeAside() : openAside()
        }}
        className="header__menu"
      />
<<<<<<< HEAD
      <div className="header__tab">
        Расписание {/* Это стейтовое значение будет меняться в зависимости от вкладки */}
      </div>
=======
      {/* <div className="header__tab">Расписани</div> */}
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
      <SearchBar />
      <GroupSelector />
      <Profile />
    </header>
  )
}

export default Header
