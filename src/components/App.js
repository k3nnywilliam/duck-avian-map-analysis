import React, { Component, Fragment } from 'react';

import CustomMap from './Map.js';
import CustomIcon from './CustomIcon.js';
import mallardicon from '../img/mallard-duck2.png';
import muscovyicon from '../img/muscovy2.png';
import { geoFeaturePoints, geoFeaturesLines } from '../geo_data/GeoFeatures.js';
import SidePane from './Sidebar.js';
import styles from './App.css';
import SimplePane from './SimpleSidePane.js';
//import Dropdown from 'react-bootstrap/Dropdown';

class App extends Component {
    render() {
        return [
            <Fragment>

            <div className={styles.topdiv}> TEST</div>
                <div className={styles.middlebox}>
                    <CustomMap center={[29.17384, 116.27890]} zoom={10}
                        geofeatPoints={geoFeaturePoints} geofeatLines={geoFeaturesLines} />
                </div>
                <div className={styles.rightbox}>
                    <SimplePane  />
                </div>
                
            </Fragment>
        ];
    }
}

export default App;

