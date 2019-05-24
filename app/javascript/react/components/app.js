import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import SlideOne from './SlideOne'
import SlideTwo from './SlideTwo'
import SlideThree from './SlideThree'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={SlideOne} />
      <Route path='/map1' component={SlideTwo} />
      <Route path='/map2' component={SlideThree} />
    </Router>
  )
}

export default App
