import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchRangersRoster} from './actions/fetchRangersRoster-action';
import {fetchRangersPlayerSeasonStats} from './actions/fetchRangersRoster-action';
import Table from "react-bootstrap/lib/Table";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";


class RangersRoster extends Component  {

    componentDidMount = () => {
        this.props.fetchRangersRoster();
        //this.props.fetchPlayerStats();
    }

    render(){
        /*
            Mika ID number  8476459
            https://statsapi.web.nhl.com/api/v1/people/8476459/  Basic stats Mika
            ?stats=statsSingleSeason&season=20172018
            https: //statsapi.web.nhl.com/api/v1/people/8476459/stats?stats=statsSingleSeason&season=20182019  Game stats Mika
        */

        //const testing = Object.entries(this.props.rosterData.data).map(item => item);
        //console.log("Testing : " + testing );

        console.log("time on ice : " + this.props.timeOnIce);
        console.log("goals : " + this.props.goals);

        const rosterTableBody = Object.entries(this.props.rosterData.data).map((item, key) => {
            const jerseyNumber = item[1].jerseyNumber;
            const fullName = item[1].person.fullName;
            //const id = item[1].person.id;
            //const positionType = item[1].position.type;
            const positionAbbreviation = item[1].position.abbreviation;
           

            return (
                <tr>
                <td>{jerseyNumber}</td>
                <td>{fullName}</td>
                <td colSpan="1">{positionAbbreviation}</td>
                <td>{this.props.goals}</td>
                </tr>
            );
        })



        console.log("Playerstats.points  : " + this.props.playerStats.points);
        console.log('Playerstats.goals : ' + this.props.playerStats.goals);

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
                        <th>Goals</th>
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
    fetchRangersRoster: () => dispatch(fetchRangersRoster()),
    fetchPlayerStats: () => dispatch(fetchRangersPlayerSeasonStats())
})

const mapStateToProps = state => ({
    rosterData: state.fetchRangersRosterReducer,
    playerStats: state.fetchRangersRosterReducer,
    timeOnIce: state.fetchRangersRosterReducer.timeOnIce,
    goals: state.fetchRangersRosterReducer.goals
})

export default connect(mapStateToProps, mapDispatchToProps)(RangersRoster);
