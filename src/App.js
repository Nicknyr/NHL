import React, { Component } from 'react';
import './App.scss';
import Rangers from './Rangers.js';
import RangersRoster from './RangersRoster';
import PlayerProfile from './PlayerProfile';

class App extends Component {


  render() {
    return (
      <div className="App">
      <PlayerProfile />
    
      </div>
    );
  }
}


export default (App);
