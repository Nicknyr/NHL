import axios from 'axios';

export function fetchStandings() {
    return function(dispatch) {
        dispatch({ type: "FETCH_STANDINGS"})
        axios.get('https://statsapi.web.nhl.com/api/v1/standings')
            .then((response) => {
                dispatch({
                    type: "FETCH_STANDINGS_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_STANDINGS_REJECTED",
                    payload: err
                })
            })
    }
}