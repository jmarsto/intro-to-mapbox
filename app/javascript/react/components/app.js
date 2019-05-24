import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Display from './Display'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Display} />
    </Router>
  )
}

export default App
