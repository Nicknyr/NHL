import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchRangersRoster} from './actions/fetchRangersRoster-action';
import Table from "react-bootstrap/lib/Table";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";


class RangersRoster extends Component  {

    componentDidMount = () => {
        this.props.fetchRangersRoster();
    }

    render(){
        /*
            Mika ID number  8476459
            https://statsapi.web.nhl.com/api/v1/people/8476459/  Basic stats Mika
            ?stats=statsSingleSeason&season=20172018
            https: //statsapi.web.nhl.com/api/v1/people/8476459/stats?stats=statsSingleSeason&season=20182019  Game stats Mika
        */

        const rosterTableBody = Object.entries(this.props.rosterData.data).map((item, key) => {
            const jerseyNumber = item[1].jerseyNumber;
            const fullName = item[1].person.fullName;
            const id = item[1].person.id;
            const positionType = item[1].position.type;
            const positionAbbreviation = item[1].position.abbreviation;
            return (
                <tr>
                <td>{jerseyNumber}</td>
                <td>{fullName}</td>
                <td colSpan="1">{positionAbbreviation}</td>
                </tr>
            );
        })

        console.log("Mika assists : " + this.props.playerStats.assists);
        console.log("Mika timeOnIcePerGame : " + this.props.playerStats.timeOnIcePerGame);
        console.log("Mike shortHandedPoints : " + this.props.playerStats.shortHandedPoints);

        return (
            <Grid>
            <Row>
                <Col className="stat-col" sm={12} md={6}>
                <Table striped bordered condensed hover responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>{rosterTableBody}</tbody>
                </Table>
                </Col>
            </Row>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchRangersRoster: () => dispatch(fetchRangersRoster())
})

const mapStateToProps = state => ({
    rosterData: state.fetchRangersRosterReducer,
    playerStats: state.fetchRangersRosterReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(RangersRoster);
