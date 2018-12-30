import React, { Component } from 'react';
import './App.scss';
import Rangers from './Rangers.js';
import RangersRoster from './RangersRoster';
import PlayerProfile from './PlayerProfile';
import { Router, Route, Switch } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Rangers} />
          <Route path="/about" component={PlayerProfile} />
          <Route path="/topics" component={RangersRoster} />
        </Switch>
      </Router>
    
      </div>
    );
  }
}


export default (App);
