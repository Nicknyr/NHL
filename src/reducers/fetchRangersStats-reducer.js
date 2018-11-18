
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
                losses: action.payload.stat.losses,
                evGGARatio: action.payload.stat.evGGARatio,
                faceOffWinPercentage: action.payload.stat.faceOffWinPercentage,
                faceOffsLost: action.payload.stat.faceOffsLost,
                faceOffsTaken: action.payload.stat.faceOffsTaken,
                faceOffsWon: action.payload.stat.faceOffsWon,
                goalsAgainstPerGame: action.payload.stat.goalsAgainstPerGame,
                goalsPerGame: action.payload.stat.goalsPerGame,
                ot: action.payload.stat.ot,
                penaltyKillPercentage: action.payload.stat.penaltyKillPercentage,
                powerPlayGoals: action.payload.stat.powerPlayGoals,
                powerPlayGoalsAgainst: action.payload.stat.powerPlayGoalsAgainst,
                powerPlayOpportunities: action.payload.stat.powerPlayOpportunities,
                powerPlayPercentage: action.payload.stat.powerPlayPercentage,
                ptPctg: action.payload.stat.ptPctg,
                pts: action.payload.stat.pts,
                savePctg: action.payload.stat.savePctg,
                shootingPctg: action.payload.stat.shootingPctg,
                shotsAllowed: action.payload.stat.shotsAllowed,
                shotsPerGame: action.payload.stat.shotsPerGame,
                winLeadFirstPer: action.payload.stat.winLeadFirstPer,
                winLeadSecondPer: action.payload.stat.winLeadSecondPer,
                winOppScoreFirst: action.payload.stat.winOppScoreFirst,
                winOutshootOpp: action.payload.stat.winOutshootOpp,
                winOutshotByOpp: action.payload.stat.winOutshotByOpp,
                winScoreFirst: action.payload.stat.winScoreFirst,
                wins: action.payload.stat.wins
            }
        }
        default: return state;
    }
}