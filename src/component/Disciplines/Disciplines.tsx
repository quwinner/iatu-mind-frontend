import './Disciplines.scss'
import React, { FC } from 'react'
import Back from '../../utils/img/here.png'
import Gray from '../../utils/img/gray_blur.png'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import DisciplinesItem from './DisciplinesItem/DisciplinesItem'
import { useApplication } from '../../hook/useApplication'

// Utils
import { Period } from '../../types'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Disciplines: FC<Props> = (props) => {
  const { changePeriod } = useApplication()

  const handleClickChangePeriod = (period: Period) => {
    changePeriod(period)
  }

  return (
    <section className="disciplines unselectable">
      <div
        className="disciplines-img"
        style={{
          backgroundImage: `url(${Gray}), url(${Back})`,
        }}
      ></div>
      <div className="disciplines-period">
        <div className="disciplines-period__content">
          <div className="disciplines-period__item">2018-1</div>
          <div className="disciplines-period__item hr">
            <div></div>
          </div>
          <div className="disciplines-period__item">2018-2</div>
          <div className="disciplines-period__item hr">
            <div></div>
          </div>
          <div className="disciplines-period__item active">2019-1</div>
          <div className="disciplines-period__item hr">
            <div></div>
          </div>
          <div className="disciplines-period__item">2019-2</div>
        </div>
      </div>
      <div className="disciplines-list">
        {disciplines.map((val, key) => {
          return <DisciplinesItem key={key} discipline={val} />
        })}
      </div>
    </section>
  )
}

export default Disciplines

const disciplines = [
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
  {
    id: 1,
    name: 'Современные проблемы авиационной науки техники и технологии самолетостроения',
  },
]
