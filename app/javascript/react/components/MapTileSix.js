import React, { Component } from 'react';

import OSMPData from '../../../assets/climb-data'

class MapTileSix extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hcnN0b24iLCJhIjoiY2p3MWNmc2VoMDVuYzRhbzU0cWo0bzNxayJ9.yYUKns-0z7q7h7LTlelGWw';

    const { features } = OSMPData

    let map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/satellite-streets-v9',
      center: [-105.285166, 39.980047],
      zoom: 14,
      bearing: -105,
      container: 'map'
    });

    map.on("load", () => {
      features.forEach(feature => {
        let popup = new mapboxgl.Popup({ offset: 25 })
          .setText(feature.attributes.FEATURE);

        let lngLat = [feature.geometry.x, feature.geometry.y]

        let marker = new mapboxgl.Marker({anchor: 'bottom'})
          .setLngLat(lngLat)
          .setPopup(popup)
          .addTo(map);
      })
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

export default MapTileSix;
