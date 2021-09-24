import './SearchBar.scss'
import React, { FC, useState } from 'react'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component

// Utils
import { ReactComponent as Search } from '../../../utils/img/search_white.svg'
<<<<<<< HEAD
=======
import { ReactComponent as Clear } from '../../../utils/img/clear.svg'
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SearchBar: FC<Props> = (props) => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
  )
}

export default SearchBar
<<<<<<< HEAD
=======

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
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
