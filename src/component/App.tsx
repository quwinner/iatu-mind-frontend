import './App.scss'
import React, { FC, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

// Import components
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Header from './Header/Header'
import Aside from './Header/Aside/Aside'
import Footer from './Footer/Footer'

import Home from './Home/Home'
import Schedule from './Schedule/Schedule'
import Disciplines from './Disciplines/Disciplines'

// Custom hooks
import { useApplication } from '../hook/useApplication'

// Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const App: FC<any> = () => {
  const { initApp } = useApplication()

  useEffect(() => {
    initApp()
  }, [])

  return (
    <>
      <Header />
      <Aside />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/disciplines" component={Disciplines} />
          <Route exact path="/schedule" component={Schedule} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
