import './Header.scss'
import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import Aside from './Aside/Aside'

import { ReactComponent as Notifications } from '../../utils/img/notifications.svg'
import { ReactComponent as DownArrow } from '../../utils/img/expand_more_white.svg'
import { ReactComponent as Logo } from '../../utils/img/logo.svg'

// Interface
interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 160,
      paddingRight: 15,
      color: '#dddddd', // цвет не работает, почему хз :(
    },
    innerText: {
      marginTop: theme.spacing(-0.6),
      color: '#dddddd',
      fontSize: '1.8rem',
      letterSpacing: '0.1rem',
    },
    menuItem: {
      fontSize: '1.5rem',
      letterSpacing: '0.1rem',
    },
    margin: {
      margin: theme.spacing(1),
      color: '#dddddd',
    },
  })
)

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Header: FC<Props> = (props) => {
  const classes = useStyles()
  const [group, setGroup] = React.useState<string | number>('')
  const [open, setOpen] = React.useState(false)

  const [state, setState] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGroup(event.target.value as number)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <header className="header unselectable">
      <Logo className="header__btn" />
      <div className="header__tab">
        Расписание {/* Это стейтовое значение будет меняться в зависимости от вкладки */}
      </div>

      <div className="profile-header">
        {/* <div className="profile-header__group">АИСТбд-31</div> */}
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.innerText} id="demo-controlled-open-select-label">
              AISTbd-31
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={group}
              onChange={handleChange}
            >
              <MenuItem className={classes.menuItem} value="">
                <em>None</em>
              </MenuItem>
              <MenuItem className={classes.menuItem} value={10}>
                iatu-mind
              </MenuItem>
              <MenuItem className={classes.menuItem} value={20}>
                iatu-mind
              </MenuItem>
              <MenuItem className={classes.menuItem} value={30}>
                iatu-mind
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* <Notifications /> */} {/* Не уверн что это нужно */}
        <Link className="profile-header__avatar" to={''}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/trick-a871a.appspot.com/o/image%2Fnoneavatar.jpg?alt=media&token=47945346-3fb8-408f-a0f4-fe28e8e3c18b"
            alt="nope"
          ></img>
        </Link>
        <div onClick={() => setState(!state)} className={cn('profile-header-info ', { active: state })}>
          <DownArrow className="profile-header__downarrow" />
        </div>
        <div className="triangle"></div>
        <div className={cn('profile-header-tip ', { active: state })}>
          <div className="profile-header-tip__item">IATU-MIND</div>
          <div className="profile-header-tip__item">IATU-MIND</div>
          <div className="profile-header-tip__item">IATU-MIND</div>
        </div>
        {/* При нажатии выподает менюшка с пунктиками*/}
      </div>
    </header>
  )
}

export default Header
