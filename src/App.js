import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {connect} from 'react-redux';
import { fetchRangersStats } from './actions/fetchRangersStats-action';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchRangersStats();
  }

 //payload[""0""].splits[""0 ""].stat.faceOffWinPercentage

  render() {

    const stats = Object.entries(this.props.rangersStats.data).map((item, key) => {
      console.log(item);
      const faceOffWinPercentage = item[1].splits[0].stat.faceOffWinPercentage;
      console.log(item[1].splits[0].stat.faceOffWinPercentage);
      return (
        <div>
          {faceOffWinPercentage}
        </div>
      );
    })
    console.log('STATS : ' + stats);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
       {stats}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRangersStats: () => dispatch(fetchRangersStats())
})

const mapStateToProps = state => ({
  rangersStats: state.fetchRangersStatsReducer
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
