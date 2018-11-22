
export default function recuder (state = {
    data: {},
    records: {},
    divisionRank: '',
    conferenceRank: '',
    leagueRank: '',
    streakCode: '',
    streakNumber: '',
    streakType: '',
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
                data: action.payload,
                records: action.payload.records,
                rangersStandings: action.payload.records[0].teamRecords[1],
                divisionRank: action.payload.records[0].teamRecords[1].divisionRank,
                conferenceRank: action.payload.records[0].teamRecords[1].conferenceRank,
                leagueRank: action.payload.records[0].teamRecords[1].leagueRank,
                streakCode: action.payload.records[0].teamRecords[1].streak.streakCode,
                streakNumber: action.payload.records[0].teamRecords[1].streak.streakNumber,
                streakType: action.payload.records[0].teamRecords[1].streak.streakType
            }
        }
        default: return state;
    }
}