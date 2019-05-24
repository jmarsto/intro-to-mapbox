import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import MapTileTwo from './MapTileTwo'
import CodeSnippetTwo from './CodeSnippetTwo'

const SlideThree = props => {
  return(
    <div>
      <div>
        <div>
          <MapTileTwo />
        </div>
        <div>
          <CodeSnippetTwo />
        </div>
        <div className="bottom-nav">
          <Link to='/map1'>
            <span className="nav-span">Back to First Map</span>
          </Link>
          <Link to='/map3'>
            <span className="nav-span action">Next Map (let's add some markers)</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlideThree;
