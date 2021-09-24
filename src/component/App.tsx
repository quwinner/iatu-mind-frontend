import './App.scss'
<<<<<<< HEAD
import React, { FC, useEffect } from 'react'
=======
import React, { FC, useEffect, useState } from 'react'
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
import { Route, Switch } from 'react-router-dom'

// Import components
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Header from './Header/Header'
import Aside from './Header/Aside/Aside'
import Footer from './Footer/Footer'

import Home from './Home/Home'
import Schedule from './Schedule/Schedule'
import Disciplines from './Disciplines/Disciplines'
<<<<<<< HEAD

// Custom hooks
import { useApplication } from '../hook/useApplication'
=======
import Profile from './Profile/Profile'

// Auth
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'

// Custom hooks
import { useApplication } from '../hook/useApplication'
import Loading from './Loading/Loading'
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7

// Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const App: FC<any> = () => {
<<<<<<< HEAD
  const { initApp } = useApplication()

  useEffect(() => {
    initApp()
  }, [])

=======
  const { isLoad, initApp } = useApplication()

  const [minDelay, setMinDelay] = useState<boolean>(false)

  useEffect(() => {
    initApp()
    setTimeout(() => setMinDelay(true), 1000)
  }, [])

  if (!isLoad || !minDelay) {
    return (
      <div className="main-loading">
        <Loading />
      </div>
    )
  }

>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
  return (
    <>
      <Header />
      <Aside />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/disciplines" component={Disciplines} />
          <Route exact path="/schedule" component={Schedule} />
<<<<<<< HEAD
=======

          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/reset-password" component={SignUp} />

          <Route path="/:login" component={Profile} />
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
