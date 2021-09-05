import './Home.scss'
import React, { FC } from 'react'

// Interface
interface Props {}

const schedule = [1, 2, 3, 4, 5, 6]

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Home: FC<Props> = (props) => {
  return (
    <section className="home">
      <div className="home__date">DATE</div>
      <div className="home__content">
        {schedule.map((val, key) => {
          return <div className="home-item"></div>
        })}
      </div>
    </section>
  )
}

export default Home
