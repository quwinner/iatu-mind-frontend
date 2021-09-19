import './SearchBar.scss'
import React, { FC, useState } from 'react'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component

// Utils
import { ReactComponent as Search } from '../../../utils/img/search_white.svg'
import { ReactComponent as Clear } from '../../../utils/img/clear.svg'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SearchBar: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [various, setVarious] = useState<number>(0)
  const [term, setTerm] = useState<string>('')

  const handlerChangeText = (e: any) => {
    setTerm(e.target.value)
  }

  const handlerClickClear = (e: any) => {
    setVarious(0)
  }

  const handlerClickOpen = (e: any) => {
    setIsOpen(true)
  }

  const handlerClickClose = (e: any) => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="search">
        <div className="search-bar">
          <input
            type="text"
            className={cn('search-bar__input', { active: isOpen })}
            placeholder="Поиск..."
            onClick={handlerClickOpen}
            onChange={handlerChangeText}
            value={term}
          />
          {various !== 0 ? (
            <>
              <div className="search-bar__category">{arr.find((x) => x.index === various)?.name}</div>
              <Clear onClick={handlerClickClear} className="search-bar__icon" />
            </>
          ) : (
            <Search onClick={handlerClickClose} className="search-bar__icon" />
          )}

          <div onClick={handlerClickClose} className={cn('search-bar__variuos', { active: isOpen })}>
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
      <div onClick={handlerClickClose} className={cn('search-bar-background-blur', { active: isOpen })} />
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
