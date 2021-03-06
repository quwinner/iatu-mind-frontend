import './App.scss'
import React, { FC, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

// Import components
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Header from './Header/Header'
import Aside from './Header/Aside/Aside'
import Footer from './Footer/Footer'

import Home from './Home/Home'
import Schedule from './Schedule/Schedule'
import Disciplines from './Disciplines/Disciplines'
import Profile from './Profile/Profile'

// Auth
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'

// Custom hooks
import { useApplication } from '../hook/useApplication'
import Loading from './Loading/Loading'

// Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const App: FC<any> = () => {
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

  return (
    <>
      <Header />
      <Aside />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/disciplines" component={Disciplines} />
          <Route exact path="/schedule" component={Schedule} />

          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/reset-password" component={SignUp} />

          <Route path="/:login" component={Profile} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
