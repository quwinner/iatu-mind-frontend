import './GroupSelector.scss'
import React, { FC, useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import { ReactComponent as Schedule } from '../../../utils/img/schedule.svg'
import { ReactComponent as Dashboard } from '../../../utils/img/dashboard.svg'
import { Link } from 'react-router-dom'

// Utils
import { useStylesGroup } from '../../../utils/styleui'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const GroupSelector: FC<Props> = (props) => {
  const classes = useStylesGroup()

  const [state, setState] = useState(false)

  const [group, setGroup] = React.useState<any>(groups[0].id)
  const [open, setOpen] = React.useState(false)

  const handleChangeGroup = (event: React.ChangeEvent<any>) => {
    setGroup(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div className="group-selector">
      <FormControl classes={{ root: classes.root }}>
        <Select open={open} onClose={handleClose} onOpen={handleOpen} value={group} onChange={handleChangeGroup}>
          {groups.map((val, key) => {
            return <MenuItem value={val.id}>{val.name}</MenuItem>
          })}
        </Select>
      </FormControl>
      {/* <div onMouseLeave={(e: any) => setState(false)} onMouseEnter={(e: any) => setState(true)} className="aside">
        <nav className="nav-side">
          <Link onClick={(e: any) => setState(false)} to={'/schedule'} className="nav-side__item link">
            <Schedule className="nav-side__icon" />
            <div className="nav-side__text">Расписание</div>
          </Link>
          <Link onClick={(e: any) => setState(false)} to={'/disciplines'} className="nav-side__item link">
            <Dashboard className="nav-side__icon" />
            <div className="nav-side__text">Предметы</div>
          </Link>
        </nav>
      </div>
      <div className={cn('background-blur', { active: state })}></div> */}
    </div>
  )
}

export default GroupSelector

const groups = [
  {
    id: 1,
    name: 'АистБд-11',
  },
  {
    id: 2,
    name: 'ппп-21',
  },
  {
    id: 3,
    name: 'ыфва-22',
  },
  {
    id: 4,
    name: 'АистБд-31',
  },
]
