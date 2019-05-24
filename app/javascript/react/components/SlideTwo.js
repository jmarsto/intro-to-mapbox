import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import MapTileOne from './MapTileOne'
import CodeSnippetOne from './CodeSnippetOne'

const SlideTwo = props => {
  return(
    <div>
      <div className="row">
        <div className="small-6 columns">
          <MapTileOne />
        </div>
        <div className="small-6 columns">
          <CodeSnippetOne />
        </div>
      </div>
    </div>
  )
}

export default SlideTwo;
