import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './screens/Home/Home'
import Settings from './screens/Settings/Settings'
import Header from './screens/Home/Header'

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </React.Fragment>
)

export default App
