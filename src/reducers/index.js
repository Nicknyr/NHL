import {combineReducers} from 'redux';
import fetchRangersStatsReducer from './fetchRangersStats-reducer';
import fetchStandingsReducer from './fetchStandings-reducer';
import fetchRangersRosterReducer from './fetchRangersRoster-reducer';

export default combineReducers({
    fetchRangersStatsReducer,
    fetchStandingsReducer,
    fetchRangersRosterReducer
})
