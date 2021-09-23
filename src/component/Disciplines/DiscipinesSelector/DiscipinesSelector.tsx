import './DiscipinesSelector.scss'
import React, { FC, useEffect, useState } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component

// Utils
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'
import cn from 'classnames'
import { GET_ALL_DISCIPLINES } from '../../../graphql/queries'
import { apolloClient } from '../../../graphql'
import Loading from '../../Loading/Loading'
import { Disciplines } from '@types'
import filteringDisciplinesUtil from '../../../utils/filteringDisciplinesUtil'
import { Alert } from '../../../utils/extends/Alert'
import { Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

// Interface
interface Props {
  setOpenError: any
  onClose: any
}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DiscipinesSelector: FC<Props> = (props) => {
  const [term, setTerm] = useState<string>('')
  const [discipline, setDiscipline] = useState<Disciplines>()
  const [disciplines, setDisciplines] = useState<Disciplines[] | null>(null)

  const handleOnChangeText = (e: any) => {
    setTerm(e.target.value)
  }

  const handleOnClickSelect = (val: any) => {
    setDiscipline(val)
  }

  const handleOnClickSubmit = (val: any) => {
    // setDiscipline(val)
    props.setOpenError(true)
    props.onClose(false)
  }

  useEffect(() => {
    apolloClient
      .query({
        query: GET_ALL_DISCIPLINES,
      })
      .then(({ data }) => {
        setDisciplines(data.disciplines)
      })
  }, [])

  if (!disciplines) {
    return (
      <section className="discipline-selector">
        <Loading />
      </section>
    )
  }

  return (
    <section className="discipline-selector">
      <input
        type="text"
        className="discipline-selector__search"
        placeholder="Поиск..."
        onChange={handleOnChangeText}
        value={term}
      />
      <div className="discipline-selector__content">
        {filteringDisciplinesUtil(disciplines, term).map((val, key) => {
          const matches = match(val.name, term)
          const parts = parse(val.name, matches)

          return (
            <div
              onClick={() => handleOnClickSelect(val)}
              key={val.id}
              className={cn('discipline-selector__item', { active: val.id === discipline?.id })}
            >
              {parts.map((part, index) => (
                <span
                  key={index + val.id}
                  style={{ fontWeight: part.highlight ? 700 : 400, color: part.highlight ? '#007bff' : '#aaaaaa' }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          )
        })}
      </div>
      <button onClick={handleOnClickSubmit} className="discipline-selector__submit">
        Добавить
      </button>
    </section>
  )
}

export default DiscipinesSelector
