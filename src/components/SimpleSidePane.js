import React, { Component, Fragment } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class SimplePane extends Component {

    render () {
        return [
            <Fragment>
             <h2>Poultry Chain</h2>
            This is where we going to put our duck drop menu.
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose duck ID
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Duck 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Duck 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Duck 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            </Fragment>
           
        ];
    }

}

export default SimplePane;