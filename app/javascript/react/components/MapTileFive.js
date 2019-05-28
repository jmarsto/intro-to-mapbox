import React, { Component } from 'react';

class MapTileFive extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hcnN0b24iLCJhIjoiY2p3MWNmc2VoMDVuYzRhbzU0cWo0bzNxayJ9.yYUKns-0z7q7h7LTlelGWw';

    var map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/satellite-streets-v10',
      center: [-105.281551, 40.016561],
      zoom: 19,
      pitch: 45,
      bearing: -25,
      container: 'map'
    });

    map.on('load', function() {

      let layers = map.getStyle().layers;
      let labelLayerId;
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer({
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
        'fill-extrusion-color': '#7c1b13',
        'fill-extrusion-height': [
          "interpolate", ["linear"], ["zoom"],
          15, 0,
          15.05, ["get", "height"]
        ],
        'fill-extrusion-base': [
          "interpolate", ["linear"], ["zoom"],
          15, 0,
          15.05, ["get", "min_height"]
        ],
        'fill-extrusion-opacity': .6
      }
      }, labelLayerId);

      let marker = new mapboxgl.Marker()
        .setLngLat([-105.281755, 40.01650])
        .addTo(map);

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

export default MapTileFive;
