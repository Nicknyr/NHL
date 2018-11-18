
export default function recuder (state = {
    data: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch(action.type) {
        case "FETCH_STANDINGS": {
            return {
                ...state,
                fetching: true
            }
        }
        case "FETCH_STANDINGS_REJECTED": {
            return {
                ...state,
                fetching: false,
                erro: action.payload
            }
        }
        case "FETCH_STANDINGS_FULFILLED": {
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