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
  const [various, setVarious] = useState<number>(0)

  return (
    <>
      <div className="search">
        <div className="search-bar">
          <input
            type="text"
            className={cn('search-bar__input', { active: state })}
            placeholder="Найти..."
            onClick={(e) => {
              if (!state) setState(!state)
            }}
          />
          <Search onClick={() => setState(!state)} className="search-bar__icon" />
          <div onClick={() => setState(false)} className={cn('search-bar__variuos', { active: state })}>
            <ul className="search-bar option-content">
              {arr.map((val, key) => {
                return (
                  <li
                    onClick={(e) => {
                      setVarious(val.index)
                      e.stopPropagation()
                    }}
                    className={cn('option-content__item', { active: key + 1 === various })}
                  >
                    {val.name}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div onClick={(e) => setState(false)} className={cn('search-bar-background-blur', { active: state })} />
    </>
  )
}

export default SearchBar

const arr: Various[] = [
  {
    index: 1,
    name: 'Расписание',
  },
  {
    index: 2,
    name: 'Профиль',
  },
  {
    index: 3,
    name: 'Убить себя',
  },
  {
    index: 4,
    name: 'Убить преподавателя',
  },
]

interface Various {
  index: number
  name: string
}
