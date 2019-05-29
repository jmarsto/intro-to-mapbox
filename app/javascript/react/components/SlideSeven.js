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
        <p className="centered">Data from: <a href="https://bouldercolorado.gov/open-data/osmp-climbing-formations/" target="_blank">bouldercolorado.gov/open-data/osmp-climbing-formations/</a></p>
        <div>
          <CodeSnippetSix />
        </div>
        <div className="bottom-nav">
          <Link to='/map5'>
            <span className="nav-span">Back</span>
          </Link>
          <Link to='/map7'>
            <span className="nav-span action">How about a different approach.</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlideSeven;
