import axios from "axios";

export function fetchRangersRoster() {
    return function(dispatch) {
        dispatch({ type: "FETCH_RANGERS_ROSTER" })

        axios.get('https://statsapi.web.nhl.com/api/v1/teams/3/roster')
            .then((response) => {
                dispatch({
                    type:"FETCH_RANGERS_ROSTER_FULFILLED",
                    payload: response.data
                })
                const playerID = response.data.roster[14].person.id;
                console.log("response.data : " + playerID);
                dispatch(fetchRangersPlayerSeasonStats(playerID));
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_RANGERS_ROSTER_REJECTED",
                    payload: err
                })
            })
    }
}

export function fetchRangersPlayerSeasonStats(playerID) {
    return function(dispatch) {
        dispatch({ type: "FETCH_PLAYER_STATS_BY_YEAR"})

        axios.get(`https://statsapi.web.nhl.com/api/v1/people/${playerID}/stats?stats=statsSingleSeason&season=20182019`)
            .then((response) => {
                dispatch({
                    type: "FETCH_PLAYERS_STATS_BY_YEAR_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_PLAYERS_STATS_BY_YEAR_REJECTED",
                    payload: err
                })
            })
    }
}
