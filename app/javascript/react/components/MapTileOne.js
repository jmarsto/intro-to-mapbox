import React, { Component } from 'react';

class MapTileOne extends Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hcnN0b24iLCJhIjoiY2p3MWNmc2VoMDVuYzRhbzU0cWo0bzNxayJ9.yYUKns-0z7q7h7LTlelGWw';

    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-105.281551, 40.016561],
      zoom: 15
    });
  }

  render() {

    return(
      <div id="map">
        <h1 className="sub-head">Map</h1>
      </div>
    )
  }
}

export default MapTileOne;
