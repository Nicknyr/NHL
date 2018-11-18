import React, { Component } from 'react';
import logo from './logo.svg';
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
    console.log('Losses : ' + this.props.rangersStats.losses);


    return (
      <div className="App">
        {/*stats*/}
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
