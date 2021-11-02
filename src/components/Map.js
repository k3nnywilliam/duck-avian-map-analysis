import React, { Component, useEffect, createRef } from 'react';
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet.motion/dist/leaflet.motion.min.js';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import styles from './Map.css';
import points from '../geo_data/points.json';
import lines from '../geo_data/lines.json';
import { default as DuckIcon } from './CustomIcon.js';
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

    let mallard = new DuckIcon({ iconUrl: mallardicon });
    let muscovy = new DuckIcon({ iconUrl: muscovyicon });

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

        let options = {
            //color: "transparent"
        }

        let motionOptions = {
            auto: true,
            easing: L.Motion.Ease.easeInOutQuart,
            speed: 0,
            duration: 3000
        }

        let markerOptions = {
            showMarker: true,
            removeOnEnd: false,
            //icon: L.divIcon({html: "<i class='fas fa-duck' aria-hidden='true'></i>"}
            icon: mallard
        }

        const duck_4161_coord = [[28.99563333, 116.08876667], [28.99336667, 116.06225]];
        const duck_4186_coord = [[29.10786667, 115.91891667], [29.14098333, 115.84163333]];
        const duck_4152_coord = [[28.68141667, 116.68168333], [28.68146667, 116.68228333]];
        const duck_4171_coord = [[29.10781667, 115.76056667], [29.0584, 115.62918333]];
        const duck_4162_coord = [[28.66683333, 115.95083333], [28.66691667, 115.95091667]];
        const duck_4156_coord = [[29.10808333, 115.7605], [29.68561667, 115.91098333]];
        const duck_4170_coord = [[29.1201, 115.79308333], [29.31291667, 117.16051667000001]];
        const duck_4175_coord = [[29.11951667, 115.7923], [29.30101667, 117.20095]];
        const duck_4188_coord = [[28.43093333, 115.91891667], [28.462, 119.95881667]];

        const duck_4161 = new L.motion.polyline(duck_4161_coord, options, motionOptions, markerOptions);
        const duck_4186 = new L.motion.polyline(duck_4186_coord, options, motionOptions, markerOptions);
        const duck_4152 = new L.motion.polyline(duck_4152_coord, options, motionOptions, markerOptions);
        const duck_4171 = new L.motion.polyline(duck_4171_coord, options, motionOptions, markerOptions);
        const duck_4162 = new L.motion.polyline(duck_4162_coord, options, motionOptions, markerOptions);
        const duck_4156 = new L.motion.polyline(duck_4156_coord, options, motionOptions, markerOptions);
        const duck_4170 = new L.motion.polyline(duck_4170_coord, options, motionOptions, markerOptions);
        const duck_4175 = new L.motion.polyline(duck_4175_coord, options, motionOptions, markerOptions);
        const duck_4188 = new L.motion.polyline(duck_4188_coord, options, motionOptions, markerOptions);

       /*  const pointsGeoJson = new L.GeoJSON(points, {
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
        }); */

        /* if (!pointsGeoJson) {
            console.log("Can't load GeoJSON");
        } */

        const duration = 8000;

        duck_4161.motionDuration(duration);
        duck_4186.motionDuration(duration);
        duck_4152.motionDuration(duration);
        duck_4171.motionDuration(duration);
        duck_4162.motionDuration(duration);
        duck_4156.motionDuration(duration);
        duck_4170.motionDuration(duration);
        duck_4175.motionDuration(duration);
        duck_4188.motionDuration(duration);
        

        duck_4161.addTo(mapInstance);
        duck_4186.addTo(mapInstance);
        duck_4152.addTo(mapInstance);
        duck_4171.addTo(mapInstance);
        duck_4162.addTo(mapInstance);
        duck_4156.addTo(mapInstance);
        duck_4170.addTo(mapInstance);
        duck_4175.addTo(mapInstance);
        duck_4188.addTo(mapInstance);

        //lineGeoJson.addTo(mapInstance);
        //pointsGeoJson.addTo(mapInstance);

    }, [])

    return null;
}

class CustomMap extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MapContainer className={styles.map} center={[28.436841, 117.965875]} zoom={8} scrollWheelZoom={true}>
                <TileLayer attribution={`© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`} url="https://api.mapbox.com/styles/v1/kennyallau/ckuoxocix5u8s17nsv1gpudg6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VubnlhbGxhdSIsImEiOiJja3VveHd3Z3UwMmMxMm9xdm1uMWhlaGlwIn0.5IWi1IBZe3-ypfrW-0jivA"
                    maxZoom={15} />
                <MapComponent />
            </MapContainer>
        );
    }
}

export default CustomMap;