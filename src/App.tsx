import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './screens/Home/Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
