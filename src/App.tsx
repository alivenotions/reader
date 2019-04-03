import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './screens/Home/Home'
import Settings from './screens/Settings/Settings'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/settings" component={Settings} />
  </Switch>
)

export default App
