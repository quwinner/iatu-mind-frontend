import './App.scss'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'

// Import components
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Header from './Header/Header'
import Aside from './Header/Aside/Aside'

import Home from './Home/Home'
import Schedule from './Schedule/Schedule'
import Disciplines from './Disciplines/Disciplines'

// Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const App: FC<any> = () => {
  const client = new ApolloClient({
    uri: 'https://surfgxds.xyz:8081/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        {/* <Aside /> */}
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/disciplines" component={Disciplines} />
            <Route exact path="/schedule" component={Schedule} />
          </Switch>
        </main>
      </ApolloProvider>
    </>
  )
}

export default App
