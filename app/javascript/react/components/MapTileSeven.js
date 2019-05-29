import React, { Component } from 'react';

import OSMPData from '../../../assets/climb-data'

class MapTileSeven extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hcnN0b24iLCJhIjoiY2p3MWNmc2VoMDVuYzRhbzU0cWo0bzNxayJ9.yYUKns-0z7q7h7LTlelGWw';

    const { features } = OSMPData

    const geojson = features.map(feature => {
      let formattedFeature = {
        ...feature,
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [feature.geometry.x, feature.geometry.y]
        },
        "properties": {
          "name": feature.attributes.FEATURE
        }
      }
      return formattedFeature
    })

    let map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/satellite-streets-v9',
      center: [-105.285166, 39.977047],
      zoom: 13.8,
      bearing: -98,
      container: 'map'
    });

    map.on("load", () => {
      map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Red_dot.svg/1024px-Red_dot.svg.png', function(error, image) {
        if (error) throw error;
        map.addImage('dot', image);
        map.addLayer({
          "id": "points",
          "type": "symbol",
          "source": {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features": geojson
            }
          },
          "layout": {
            "icon-image": "dot",
            "icon-size": 0.008,
            "icon-allow-overlap": true,
          }
        });
      });

      let popup = new mapboxgl.Popup({
        closeButton: false,
      });

      map.on('click', 'points', function (e) {
        let name = e.features[0].properties.name

        popup.setLngLat(e.lngLat)
          .setHTML(name)
          .addTo(map);
      })

      map.on('mouseenter', 'points', function () {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'points', function() {
        map.getCanvas().style.cursor = '';
      });
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

export default MapTileSeven;
