import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import MapTileSix from './MapTileSix'
import CodeSnippetSix from './CodeSnippetSix'

const SlideSeven = props => {
  return(
    <div>
      <div>
        <div>
          <MapTileSix />
        </div>
        <div>
          <CodeSnippetSix />
        </div>
        <div className="bottom-nav">
          <Link to='/map5'>
            <span className="nav-span">Back</span>
          </Link>
          <Link to='/map7'>
            <span className="nav-span action">next?</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlideSeven;
