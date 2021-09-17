import './SearchBar.scss'
import React, { FC, useState } from 'react'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component

// Utils
import { ReactComponent as Search } from '../../../utils/img/search_white.svg'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SearchBar: FC<Props> = (props) => {
const [state, setState] = useState<boolean>(false)

  return (
    <div className="search">
      <div className="search-bar">
        <input
          type="text"
          className={cn('search-bar__input', { active: state })}
          placeholder="Найти..."
          onClick={() => setState(!state)}
        />
        <div className="search-bar__loupe">
          <Search />
        </div>
        <section onClick={() => setState(false)} className={cn('search-bar__section ', { active: state })}>
          {/* Я конечно не уверен, но мне кажется он выводит скрывающийся блок 
              так криво потому что там кнопку не видно из за бекэнда */}
          <div className="search-info">
            <div className="search-info___chapter">Расписание</div>
            <div>Профиль</div>
            <div>Убить себя</div>
            <div>Убить преподавателя</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SearchBar
