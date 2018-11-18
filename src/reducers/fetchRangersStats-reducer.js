
export default function reducer (state = {
    data: {},
    evGGARatio: '',
    faceOffWinPercentage: '',
    faceOffsLost:'',
    faceOffsTaken: '',
    faceOffsWon: '',
    gamesPlayed: '',
    goalsAgainstPerGame: '',
    goalsPerGame: '',
    losses: '',
    ot: '',
    penaltyKillPercentage: '',
    powerPlayGoals: '',
    powerPlayGoalsAgainst: '',
    powerPlayOpportunities: '',
    powerPlayPercentage: '',
    ptPctg: '',
    pts: '',
    savePctg: '',
    shootingPctg: '',
    shotsAllowed: '',
    shotsPerGame: '',
    winLeadFirstPer: '',
    winLeadSecondPer: '',
    winOppScoreFirst: '',
    winOutshootOpp: '',
    winOutshotByOpp: '',
    winScoreFirst: '',
    wins: '',
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
                data: action.payload.stat,
                // Accessing nested props from API directly here rather than in Object.entires in App.js
                gamesPlayed: action.payload.stat.gamesPlayed,
                losses: action.payload.stat.losses
            }
        }
        default: return state;
    }
}