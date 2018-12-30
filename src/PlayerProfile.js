import React, { Component } from 'react';
import {connect} from 'react-redux';
import Table from "react-bootstrap/lib/Table";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Label from "react-bootstrap/lib/Label";
import PlayerStats from './PlayerStats';
import PlayerInfo from './PlayerInfo';
import PlayerSidebar from './PlayerSidebar';


class PlayerProfile extends Component {

    componentDidMount = () => {

    }

    render() {
        return (
            <Grid>
                <PlayerSidebar />
                <PlayerInfo />
                <PlayerStats />
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);