import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchRangersStats } from './actions/fetchRangersStats-action';
import { fetchStandings } from './actions/fetchStandings-action';
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import rangersLogo from './images/rangers2.png';

class Rangers extends Component {

  componentDidMount = () => {
    this.props.fetchRangersStats();
    this.props.fetchStandings();
  }


  render() {

    // Accessing this.props.rangersStat.data and it's nested properties directly in the reducer
    //console.log(this.props.rangersStats.data);
    const losses = this.props.rangersStats.losses;
    const evGGARatio = this.props.rangersStats.evGGARatio;
    const faceOffWinPercentage = this.props.rangersStats.faceOffWinPercentage;
    const faceOffsLost = this.props.rangersStats.faceOffsLost;
    const faceOffsTaken = this.props.rangersStats.faceOffsTaken;
    const faceOffsWon = this.props.rangersStats.faceOffsWon;
    const gamesPlayed = this.props.rangersStats.gamesPlayed;
    const goalsAgainstPerGame = this.props.rangersStats.goalsAgainstPerGame;
    const goalsPerGame = this.props.rangersStats.goalsPerGame;
    const ot = this.props.rangersStats.ot;
    const penaltyKillPercentage = this.props.rangersStats.penaltyKillPercentage;
    const powerPlayGoals = this.props.rangersStats.powerPlayGoals;
    const powerPlayGoalsAgainst = this.props.rangersStats.powerPlayGoalsAgainst;
    const powerPlayOpportunities = this.props.rangersStats.powerPlayOpportunities;
    const powerPlayPercentage = this.props.rangersStats.powerPlayPercentage;
    const ptPctg = this.props.rangersStats.ptPctg;
    const pts = this.props.rangersStats.pts;
    const savePctg = this.props.rangersStats.savePctg;
    const shootingPctg = this.props.rangersStats.shootingPctg;
    const shotsAllowed = this.props.rangersStats.shotsAllowed;
    const shotsPerGame = this.props.rangersStats.shotsPerGame;
    const winLeadFirstPer = this.props.rangersStats.winLeadFirstPer;
    const winLeadSecondPer = this.props.rangersStats.winLeadSecondPer;
    const winOppScoreFirst = this.props.rangersStats.winOppScoreFirst;
    const winOutshootOpp = this.props.rangersStats.winOutshootOpp;
    const winOutshotByOpp = this.props.rangersStats.winOutshotByOpp;
    const winScoreFirst = this.props.rangersStats.winScoreFirst;
    const wins = this.props.rangersStats.wins;


    return (
      <Grid>
        <Row className="team-stats-container">
          <img className="team-logo" src={rangersLogo} alt="Rangers logo" height={150} width={150} />
          <Col className="stat-col" sm={12} md={4}>
            <h2>Points</h2>
            <p>{pts}</p>
          </Col>
          <Col className="stat-col" sm={12} md={4}>
            <h2>Games Played</h2>
            <p>{gamesPlayed}</p>
          </Col>
          <Col className="stat-col" sm={12} md={4}>
            <h2>Wins</h2>
          <p>{wins}</p>
          </Col>
          <Col className="stat-col" sm={12} md={4}>
            <h2>Losses</h2>
            <p>{losses}</p>
          </Col>
          <Col className="stat-col" sm={12} md={4}>
            <h2>Overtime Losses</h2>
            <p>{ot}</p>
          </Col>
          <Col className="stat-col" sm={12} md={4}>
            <h2>Goals For</h2>
            <p>{goalsPerGame}</p>
          </Col>
          <Col className="stat-col" sm={12} md={4}>
            <h2>Goals Against</h2>
            <p>{goalsAgainstPerGame}</p>
          </Col>
          <Col className="stat-col" sm={12} md={4}>
            <h2>Shooting %</h2>
            <p>{shootingPctg}</p>
          </Col>
          <Col className="stat-col" sm={12} md={4}>
            <h2>Save %</h2>
            <p>{savePctg}</p>
          </Col>
          <Col className="stat-col" sm={12} md={4}>
            <h2>Shots</h2>
            <p>{shotsPerGame}</p>
          </Col>
          <Col className="stat-col" sm={12} md={4}>
            <h2>Shots Allowed</h2>
            <p>{shotsAllowed}</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

 /* <div>evGGARatio : {evGGARatio}</div>
  <div>faceOffWinPercentage : {faceOffWinPercentage}</div>
  <div>faceOffsLost : {faceOffsLost}</div>
  <div>faceOffsTaken : {faceOffsTaken}</div>
  <div>faceOffsWon : {faceOffsWon}</div>
  <div>goalsAgainstPerGame : {goalsAgainstPerGame}</div>
  <div>goalsPerGame : {goalsPerGame}</div>
  <div>ot : {ot}</div>
  <div>penaltyKillPercentage : {penaltyKillPercentage}</div>
  <div>powerPlayGoals : {powerPlayGoals}</div>
  <div>powerPlayGoalsAgainst : {powerPlayGoalsAgainst}</div>
  <div>powerPlayOpportunities : {powerPlayOpportunities}</div>
  <div>powerPlayPercentage : {powerPlayPercentage}</div>
  <div>ptPctg : {ptPctg}</div>
  <div>savePctg : {savePctg}</div>
  <div>shootingPctg : {shootingPctg}</div>
  <div>shotsAllowed : {shotsAllowed}</div>
  <div>shotsPerGame : {shotsPerGame}</div>
  <div>winLeadFirstPer : {winLeadFirstPer}</div>
  <div>winLeadSecondPer : {winLeadSecondPer}</div>
  <div>winOppScoreFirst : {winOppScoreFirst}</div>
  <div>winOutshootOpp : {winOutshootOpp}</div>
  <div>winOutshotByOpp : {winOutshotByOpp}</div>
  <div>winScoreFirst : {winScoreFirst}</div>
*/

const mapDispatchToProps = dispatch => ({
  fetchRangersStats: () => dispatch(fetchRangersStats()),
  fetchStandings: () => dispatch(fetchStandings())
})

const mapStateToProps = state => ({
  rangersStats: state.fetchRangersStatsReducer,
  standings: state.fetchStandingsReducer
})


export default connect(mapStateToProps, mapDispatchToProps)(Rangers);
