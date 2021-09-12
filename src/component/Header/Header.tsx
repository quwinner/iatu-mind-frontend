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
      <SearchBar />
      <GroupSelector /> {/* Cringe MUST BE REwoRKED*/}
      <Profile />
    </header>
  )
}

export default Header
