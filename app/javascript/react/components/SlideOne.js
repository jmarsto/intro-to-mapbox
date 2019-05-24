import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const SlideOne = props => {
  return(
    <div>
      <h1 className="title">Intro to Mapbox</h1>
      <div className="jump-in">
        <a href="https://account.mapbox.com/auth/signup/?route-to=%22/access-tokens/%22" target="_blank">Jump in!</a>
      </div>
      <Link to='/map1' className="map-prompt">
        <p>Let's see a Map</p>
      </Link>
    </div>
  )
}

export default SlideOne;
