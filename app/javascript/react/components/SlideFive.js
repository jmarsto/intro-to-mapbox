import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import MapTileFour from './MapTileFour'
import CodeSnippetFour from './CodeSnippetFour'

const SlideFive = props => {
  return(
    <div>
      <div>
        <div>
          <MapTileFour />
        </div>
        <div>
          <CodeSnippetFour />
        </div>
        <div className="bottom-nav">
          <Link to='/map3'>
            <span className="nav-span">Back to Bad Marker Map</span>
          </Link>
          <Link to='/map5'>
            <span className="nav-span action">Alright, what's next?</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlideFive;
