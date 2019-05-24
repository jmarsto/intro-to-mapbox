import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import MapTileThree from './MapTileThree'
import CodeSnippetThree from './CodeSnippetThree'

const SlideFour = props => {
  return(
    <div>
      <div>
        <div>
          <MapTileThree />
        </div>
        <div>
          <CodeSnippetThree />
        </div>
        <div className="bottom-nav">
          <Link to='/map2'>
            <span className="nav-span">Back to Second Map</span>
          </Link>
          <Link to='/map4'>
            <span className="nav-span action">Let's do it again, but better</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlideFour;
