import React, { Component, Fragment } from 'react';
import CustomMap from './Map.js';
import styles from './App.css';
import MapNavbar from './Navbar.js';

class App extends Component {
    render() {
        return [
            <Fragment>
                <MapNavbar />
                <div className={styles.middlebox}>
                <CustomMap />
                </div>
            </Fragment>
        ];
    }
}

export default App;

