import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import MapTileOne from './MapTileOne'
import CodeSnippetOne from './CodeSnippetOne'

const SlideTwo = props => {
  return(
    <div>
      <div>
        <div>
          <MapTileOne />
        </div>
        <div>
          <CodeSnippetOne />
        </div>
        <div>
          <Link to='/map2' className="map-prompt">
            <p>Next Map</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlideTwo;
