import React, { Component } from 'react';
import './App.scss';
import Rangers from './Rangers.js';
import RangersRoster from './RangersRoster';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Rangers />
      </div>
    );
  }
}


export default (App);
