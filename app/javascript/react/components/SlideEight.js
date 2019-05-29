import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import MapTileSeven from './MapTileSeven'
import CodeSnippetSeven from './CodeSnippetSeven'

const SlideEight = props => {
  return(
    <div>
      <div>
        <div>
          <MapTileSeven />
        </div>
        <div>
          <CodeSnippetSeven />
        </div>
        <div className="bottom-nav">
          <Link to='/map6'>
            <span className="nav-span">Back</span>
          </Link>
          <Link to='/map8'>
            <span className="nav-span action">next?</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlideEight;
