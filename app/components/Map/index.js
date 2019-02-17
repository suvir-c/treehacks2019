import React, { Component } from 'react';
import * as esriLoader from 'esri-loader';
import PropTypes from 'prop-types';

class MarkerMap extends Component {
  state = {};

  componentDidMount() {
    esriLoader
      .loadModules([
        'esri/Map',
        'esri/views/SceneView',
        'esri/layers/GraphicsLayer',
        'esri/Graphic',
        'esri/geometry/Point',
      ])
      .then(([Map, MapView, GraphicsLayer, Graphic, Point]) => {
        const map = new Map({
          basemap: 'topo',
        });
        const view = new MapView({
          map,
          container: 'viewDiv',
          center: this.props.center,
          zoom: 12,
        });

        console.log(view);

        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        const markerSymbol = {
          type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
          color: '#F85858',
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: '#BE2626',
            width: 2,
          },
        };
        console.log(this.props.center);
        this.props.coordinates.forEach(coordinate => {
          const pt = new Point(coordinate, map.spatialReference);
          graphicsLayer.add(new Graphic(pt, markerSymbol));
        });
      })

      .catch(err => {
        // handle any errors
        console.error(err);
      });
  }

  render() {
    return <div id="viewDiv" className="map" style={{ height: '500px' }} />;
  }
}

MarkerMap.propTypes = {
  center: PropTypes.array,
  coordinates: PropTypes.array,
};

export default MarkerMap;
