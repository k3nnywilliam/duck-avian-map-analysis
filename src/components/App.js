import React, { Component } from 'react';
import DuckMap from './Map.js';
import CustomIcon from "./CustomIcon.js";
//import SidePanel from './Sidebar.js';
import mallardicon from "../img/mallard-duck2.png";
import muscovyicon from "../img/muscovy2.png";
import { geoFeaturePoints, geoFeaturesLines } from '../geo_data/GeoFeatures.js';

class App extends Component {
    render(){
        return (
            <div><DuckMap center={[29.17384, 116.27890]} zoom={10} 
            geofeatPoints={geoFeaturePoints} geofeatLines={geoFeaturesLines} /></div>
        );
    }
}

export default App;