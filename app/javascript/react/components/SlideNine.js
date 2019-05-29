import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import MapTileEight from './MapTileEight'
import CodeSnippetEight from './CodeSnippetEight'

const SlideNine = props => {
  return(
    <div>
      <div>
        <div>
          <MapTileEight />
        </div>
        <div>
          <CodeSnippetEight />
        </div>
        <div className="bottom-nav">
          <Link to='/map7'>
            <span className="nav-span">Back</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlideNine;
