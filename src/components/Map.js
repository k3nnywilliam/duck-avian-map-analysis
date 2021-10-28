import React, { Component } from 'react';
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
//import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

L.Icon.Default.imagePath ='../node_modules/leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


class DuckMap extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MapContainer style={{ width: "100%", height: "100vh" , backgroundColor: "grey", marginTop: "0px", marginBottom: "0px" }} center={this.props.center} zoom={this.props.zoom} scrollWheelZoom={true}>
                <TileLayer attribution={`© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`} url="https://api.mapbox.com/styles/v1/kennyallau/ckuoxocix5u8s17nsv1gpudg6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VubnlhbGxhdSIsImEiOiJja3VveHd3Z3UwMmMxMm9xdm1uMWhlaGlwIn0.5IWi1IBZe3-ypfrW-0jivA" />

            </MapContainer>
        );
    }
}
export default DuckMap;