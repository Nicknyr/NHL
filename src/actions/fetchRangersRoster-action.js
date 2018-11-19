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
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_RANGERS_ROSTER_REJECTED",
                    payload: err
                })
            })
    }
}