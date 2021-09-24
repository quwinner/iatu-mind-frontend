import './Home.scss'
import React, { FC, useState } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import Loading from '../Loading/Loading'
import ScheduleTicket from '../Schedule/ScheduleTicket/ScheduleTicket'
import { Button, Drawer } from '@material-ui/core'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Home: FC<Props> = (props) => {
  const [ticketShow, setTicketShow] = useState<boolean>(false)

  const [state, setState] = React.useState<boolean>(false)

  const toggleDrawer = (open: any) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState(!state)
  }

  return (
    <section
      onClick={(e: any) => {
        if (ticketShow) return
        setTicketShow(true)
      }}
      className="home"
    >
      {/* <Loading />
      {ticketShow && <ScheduleTicket setShow={setTicketShow} />} */}
      <div>
        <React.Fragment>
          <Button onClick={toggleDrawer(true)}>Top</Button>
          <Drawer anchor={'top'} open={state} onClose={toggleDrawer(false)}></Drawer>
        </React.Fragment>
      </div>
    </section>
  )
}

export default Home
