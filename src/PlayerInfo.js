import React from 'react';
import Table from "react-bootstrap/lib/Table";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Label from "react-bootstrap/lib/Label";
import Image from "react-bootstrap/lib/Image";

const PlayerInfo = () => {
    return ( 
        <Col xs={12} md={10} className="player-info"> 
            <h1>Chris Kreider</h1>
            <ul>
                <li>6'3"</li>
                <li>220 lb</li>
                <li>27 years old</li>
            </ul>
            <h3>New York Rangers</h3>
             <Image src="/placeholder.png" circle height={200} width={200}/>
        </Col>
    );
}

export default PlayerInfo;