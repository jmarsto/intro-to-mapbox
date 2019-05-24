import React, { Component } from 'react';

class MapTileThree extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hcnN0b24iLCJhIjoiY2p3MWNmc2VoMDVuYzRhbzU0cWo0bzNxayJ9.yYUKns-0z7q7h7LTlelGWw';

    let map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      zoom: 12.36,
      center: [-71.0628,42.3635]
    });

    map.on("load", function () {
      map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        map.addLayer({
          id: "markers",
          type: "symbol",
          source: {
            type: "geojson",
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [-71.0573, 42.3654]
                  }
                }
              ]
            }
          },
          layout: {
          "icon-image": "custom-marker",
          }
        });
      });
    });
  }

  render() {

    return(
      <div>
        <h1 className="sub-head">Map</h1>
        <h4 className="marker-playground"><a href="https://docs.mapbox.com/help/interactive-tools/marker-playground/" target="_blank">docs.mapbox.com/help/interactive-tools/marker-playground/</a></h4>
        <div id="map">
        </div>
      </div>
    )
  }
}

export default MapTileThree;
