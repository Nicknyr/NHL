import React from 'react';
import Table from "react-bootstrap/lib/Table";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Label from "react-bootstrap/lib/Label";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";


const PlayerStats = () => {

    return (
        //<div className="playr-stats">
        <Col xs={12} md={10} className="player-stats">
                <Row>
                 <h2>Season Stats</h2>
                <DropdownButton
                    bsSize="large"
                    title="2017-2018"
                    id="dropdown-size-large"
                    >
                    <MenuItem eventKey="1">2016-2017</MenuItem>
                    <MenuItem eventKey="2">2015-2016</MenuItem>
                    <MenuItem eventKey="3">2014-15</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
                <hr/>
                </Row>
                <Row>
                    <Col xs={12} md={3} mdOffset={3}>
                      <h3>Games Played</h3>
                    </Col>
                    <Col xs={12} md={3}>
                      <h3>20</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} mdOffset={3}>
                      <h3>Goals</h3>
                    </Col>
                    <Col xs={12} md={3}>
                      <h3>20</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} mdOffset={3}>
                      <h3>Assists</h3>
                    </Col>
                    <Col xs={12} md={3}>
                      <h3>20</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} mdOffset={3}>
                        <h3>Points</h3>
                    </Col>
                    <Col xs={12} md={3}>
                      <h3>20</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} mdOffset={3}>
                        <h3>+/-</h3>
                    </Col>
                    <Col xs={12} md={3}>
                      <h3>20</h3>
                    </Col>
                </Row>
        </Col>
       
    );
}

export default PlayerStats;