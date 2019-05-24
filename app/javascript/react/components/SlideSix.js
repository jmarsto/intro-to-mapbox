import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import MapTileFive from './MapTileFive'
import CodeSnippetFive from './CodeSnippetFive'

const SlideSix = props => {
  return(
    <div>
      <div>
        <div>
          <MapTileFive />
        </div>
        <div>
          <CodeSnippetFive />
        </div>
        <div className="bottom-nav">
          <Link to='/map4'>
            <span className="nav-span">Back</span>
          </Link>
          <Link to='/map6'>
            <span className="nav-span action">next?</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlideSix;
