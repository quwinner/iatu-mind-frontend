import './Home.scss'
import React, { FC, useState } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import Loading from '../Loading/Loading'
import ScheduleTicket from '../Schedule/ScheduleTicket/ScheduleTicket'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Home: FC<Props> = (props) => {
  const [ticketShow, setTicketShow] = useState<boolean>(false)

  return (
    <section
      onClick={(e: any) => {
        if (ticketShow) return
        setTicketShow(true)
      }}
      className="home"
    >
      <Loading />
      {ticketShow && <ScheduleTicket setShow={setTicketShow} />}
    </section>
  )
}

export default Home
