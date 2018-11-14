
export default function reducer (state = {
    data: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch(action.type) {
        case "FETCH_RANGERS_STATS": {
            return {
                ...state,
                fetching: true
            }
        }
        case "FETCH_RANGERS_STATS_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "FETCH_RANGERS_STATS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            }
        }
        default: return state;
    }
}