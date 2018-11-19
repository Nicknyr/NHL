
export default function reducer (state = {
    data: {},
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch(action.type) {
        case "FETCH_RANGERS_ROSTER": {
            return {
                ...state,
                fetching: true
            }
        }
        case "FETCH_RANGERS_ROSTER_REJECTED": {
            return {
                ...state,
                fetching: false,
                eror: action.payload
            }
        }
        case "FETCH_RANGERS_ROSTER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload.roster
            }
        }
        default: return state;
    }
}