import React, { Component } from 'react';
import './App.scss';
import {connect} from 'react-redux';
import { fetchRangersStats } from './actions/fetchRangersStats-action';
import { fetchStandings } from './actions/fetchStandings-action';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchRangersStats();
    this.props.fetchStandings();
  }


  render() {

    // Accessing this.props.rangersStat.data and it's nested properties directly in the reducer
    console.log(this.props.rangersStats.data);
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
      <div className="App">
        <div>Losses : {losses}</div>
        <div>evGGARatio : {evGGARatio}</div>
        <div>faceOffWinPercentage : {faceOffWinPercentage}</div>
        <div>faceOffsLost : {faceOffsLost}</div>
        <div>faceOffsTaken : {faceOffsTaken}</div>
        <div>faceOffsWon : {faceOffsWon}</div>
        <div>gamesPlayed : {gamesPlayed}</div>
        <div>goalsAgainstPerGame : {goalsAgainstPerGame}</div>
        <div>goalsPerGame : {goalsPerGame}</div>
        <div>ot : {ot}</div>
        <div>penaltyKillPercentage : {penaltyKillPercentage}</div>
        <div>powerPlayGoals : {powerPlayGoals}</div>
        <div>powerPlayGoalsAgainst : {powerPlayGoalsAgainst}</div>
        <div>powerPlayOpportunities : {powerPlayOpportunities}</div>
        <div>powerPlayPercentage : {powerPlayPercentage}</div>
        <div>ptPctg : {ptPctg}</div>
        <div>pts : {pts}</div>
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
        <div>wins : {wins}</div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchRangersStats: () => dispatch(fetchRangersStats()),
  fetchStandings: () => dispatch(fetchStandings())
})

const mapStateToProps = state => ({
  rangersStats: state.fetchRangersStatsReducer,
  standings: state.fetchStandingsReducer
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
