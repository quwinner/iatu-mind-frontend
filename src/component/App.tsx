import './App.scss'
import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'

// Import components
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Home from './Home/Home'
import Header from './Header/Header'
import Schedule from './Schedule/Schedule'

// Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const App: FC<any> = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/schedule" component={Schedule} />
        </Switch>
      </main>
    </>
  )
}

export default App
