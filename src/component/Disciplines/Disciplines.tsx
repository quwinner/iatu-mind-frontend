import './Disciplines.scss'
import React, { FC, useState } from 'react'

import Back from '../../utils/img/here.png'
import Gray from '../../utils/img/gray_blur.png'

import GrayScrollLeft from '../../utils/img/gray_blur_h.png'
import GrayScrollRight from '../../utils/img/gray_blur_rh.png'

import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import { ReactComponent as Add } from '../../utils/img/add.svg'
import DisciplinesItem from './DisciplinesItem/DisciplinesItem'
import { useApplication } from '../../hook/useApplication'

// Utils
import { Period } from '@types'
import { Drawer, Snackbar } from '@material-ui/core'
import DiscipinesSelector from './DiscipinesSelector/DiscipinesSelector'
import { Alert } from '../../utils/extends/Alert'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Disciplines: FC<Props> = (props) => {
  const { changePeriod, periods, periodNow } = useApplication()

  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [isOpenError, setOpenError] = useState<boolean>(false)

  const handleClickChangePeriod = (period: Period) => {
    changePeriod(period)
  }

  const toggleDrawer = (open: any) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setOpenError(false)
  }

  return (
    <>
      <section className="disciplines unselectable">
        <div
          className="disciplines-img"
          style={{
            backgroundImage: `url(${Gray}), url(${Back})`,
          }}
        ></div>
        <div className="disciplines-period">
          <button className="disciplines-period__scroll left">R</button>
          <div className="disciplines-period__content">
            {periods.map((val, key) => {
              return (
                <>
                  <button
                    onClick={() => handleClickChangePeriod(val)}
                    className={cn('disciplines-period__item', { active: val.id === periodNow.id })}
                    key={key + val.id + 'button'}
                  >
                    {val.year}-{val.half}
                  </button>
                  <span className="disciplines-period__item hr" key={key + val.id + 'span'} />
                </>
              )
            })}
          </div>
          <button className="disciplines-period__scroll right">L</button>

          <div
            style={{
              backgroundImage: `url(${GrayScrollLeft}), url(${GrayScrollRight})`,
            }}
            className="disciplines-period__background"
          />
        </div>
        <div className="disciplines-list">
          {disciplinesHardCode.map((val, key) => {
            return <DisciplinesItem key={key} discipline={val} />
          })}
        </div>
        <div className="disciplines-add">
          <div onClick={toggleDrawer(true)} className="disciplines-add__content">
            <Add className="disciplines-add__icon" />
            <Drawer anchor={'top'} open={isOpen} onClose={toggleDrawer(false)} onClick={(e) => e.stopPropagation()}>
              <DiscipinesSelector onClose={setIsOpen} setOpenError={setOpenError} />
            </Drawer>
          </div>
        </div>
      </section>
      <Snackbar autoHideDuration={4000} className="tr-snackbar" open={isOpenError} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          У вас нету доступа
        </Alert>
      </Snackbar>
    </>
  )
}

export default Disciplines

const disciplinesHardCode = [
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
