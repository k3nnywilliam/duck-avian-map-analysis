import React, { Component, useEffect, createRef } from 'react';
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import styles from './Map.css';
import points from '../geo_data/points.json';
import lines from '../geo_data/lines.json';
import { CustomIcon } from "./CustomIcon.js";
import mallardicon from './images/mallard-duck2.png';
import muscovyicon from './images/muscovy2.png';

L.Icon.Default.imagePath = '../node_modules/leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


function MapComponent() {
    const mapInstance = useMap();

    let mallard = new CustomIcon({ iconUrl: mallardicon });
    let muscovy = new CustomIcon({ iconUrl: muscovyicon });

    let linestyle = {
        color: 'red',
        weight: 5,
        opacity: 0.6
    },
        stroke = {
            color: "#fff",
            weight: 7,
            opacity: 0.4
        };


    useEffect(() => {
        if (!mapInstance) return;

        const lineGeoJson = new L.geoJSON(lines, {
            style: linestyle
        })

        const pointsGeoJson = new L.GeoJSON(points, {
            pointToLayer: function (feature, latlng) {
                switch (feature.properties.individual) {
                    case 'Anas platyrhynchos': return L.marker(latlng, { icon: mallard });
                    case 'Cairina moschata': return L.marker(latlng, { icon: muscovy });
                }
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`Tag ID: ${feature.properties.tag_ident}  
                <p> Date: ${feature.properties.date}</p>`);
            }
        });

    if (!pointsGeoJson) {
        console.log("Can't load GeoJSON");
    }

    lineGeoJson.addTo(mapInstance);
    pointsGeoJson.addTo(mapInstance);

}, [])

return null;
}

class CustomMap extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MapContainer className={styles.map} center={[29.17384, 116.27890]} zoom={10} scrollWheelZoom={true}>
                <TileLayer attribution={`© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`} url="https://api.mapbox.com/styles/v1/kennyallau/ckuoxocix5u8s17nsv1gpudg6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VubnlhbGxhdSIsImEiOiJja3VveHd3Z3UwMmMxMm9xdm1uMWhlaGlwIn0.5IWi1IBZe3-ypfrW-0jivA" 
                    maxZoom={15}/>
                <MapComponent />
            </MapContainer>
        );
    }
}

export default CustomMap;