import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Show from '../components/pages/show'
import App from '../App'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/artist/:id' component={Show} />
    </Switch>
  </BrowserRouter>
)

export default Router
