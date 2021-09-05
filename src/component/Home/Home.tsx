import './Home.scss'
import React, { FC } from 'react'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Home: FC<Props> = (props) => {
  return (
    <section className="home">
      <div className="home__date">DATE</div>
    </section>
  )
}

export default Home
