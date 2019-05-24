import React, { Component } from 'react';

class MapTileFour extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hcnN0b24iLCJhIjoiY2p3MWNmc2VoMDVuYzRhbzU0cWo0bzNxayJ9.yYUKns-0z7q7h7LTlelGWw';

    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-105.281551, 40.016561],
      zoom: 18
    });

    map.on("load", () => {
      let marker = new mapboxgl.Marker()
        .setLngLat([-105.281814, 40.01643])
        .addTo(map);
    })
  }

  render() {

    return(
      <div id="map">
        <h1 className="sub-head">Map</h1>
      </div>
    )
  }
}

export default MapTileFour;
