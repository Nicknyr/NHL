import {combineReducers} from 'redux';
import fetchRangersStatsReducer from './fetchRangersStats-reducer';
import fetchStandingsReducer from './fetchStandings-reducer';

export default combineReducers({
    fetchRangersStatsReducer,
    fetchStandingsReducer
})
