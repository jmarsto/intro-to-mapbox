import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import SlideOne from './SlideOne'
import SlideTwo from './SlideTwo'
import SlideThree from './SlideThree'
import SlideFour from './SlideFour'
import SlideFive from './SlideFive'
import SlideSix from './SlideSix'
import SlideSeven from './SlideSeven'
import SlideEight from './SlideEight'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={SlideOne} />
      <Route path='/map1' component={SlideTwo} />
      <Route path='/map2' component={SlideThree} />
      <Route path='/map3' component={SlideFour} />
      <Route path='/map4' component={SlideFive} />
      <Route path='/map5' component={SlideSix} />
      <Route path='/map6' component={SlideSeven} />
      <Route path='/map7' component={SlideEight} />
    </Router>
  )
}

export default App
