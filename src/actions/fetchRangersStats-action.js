import axios from "axios";

export function fetchRangersStats() {
    return function(dispatch) {
        dispatch({ type: "FETCH_RANGERS_STATS"})
        axios.get('https://statsapi.web.nhl.com/api/v1/teams/3/stats')
            .then((response) => {
                dispatch({
                    type: "FETCH_RANGERS_STATS_FULFILLED",
                    payload: response.data.stats
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_RANGERS_STATS_REJECTED",
                    payload: err
                })
            })
    }
}