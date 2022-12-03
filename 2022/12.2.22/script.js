//output - total score if you play according to the strategy guide

// Rock: A, X, 1 point
// Paper: B, Y, 2 points
// Scissors: C, Z, 3 points 
// Outcomes: 
        // 0 for loss
        // 3 for draw
        // 6 for win 

//helper function: win, lose, or draw? 
function calcRoundResult([opponentPlay, yourPlay]) {
    const symbol = {
        A: 'rock', 
        X: 'rock', 
        B: 'paper',
        Y: 'paper', 
        C: 'scissors', 
        Z: 'scissors'
    }

    if (symbol[opponentPlay] === 'rock') {
        return symbol[yourPlay] === 'paper' ? 'win' : symbol[yourPlay] === 'scissors' ? 'lose' : 'draw'
    } else if (symbol[opponentPlay] === 'paper') {
        return symbol[yourPlay] === 'scissors' ? 'win' : symbol[yourPlay] === 'rock' ? 'lose' : 'draw'
    } else if (symbol[opponentPlay] === 'scissors') {
        return symbol[yourPlay]=== 'rock' ? 'win' : symbol[yourPlay] === 'paper' ? 'lose' : 'draw'
    }
}

function calcOutcomeScore(result) {
    const scoreByOutcome = {
        'win': 6,
        'draw': 3,  
        'lose': 0
    }
    return scoreByOutcome[result]
}


function calcYourPlayScore(play) {
    const scoreByPlay = {
        'X': 1,
        'Y': 2,  
        'Z': 3
    }
    return scoreByPlay[play]
}

function calcRoundScore([opponentPlay, yourPlay]) {
    const result = calcRoundResult([opponentPlay, yourPlay])
    const total = calcOutcomeScore(result) + calcYourPlayScore(yourPlay)
    return total
}


const strategyGuide = document.querySelector('pre').innerHTML.trim()

// split by /n to get each round
// split each round into an array of 2 values [opponentPlay, yourPlay]
const roundsArray = strategyGuide.split(/\n/).map(round => round.split(' '))

// map each round (subarray) onto the score for that round (outcome score + your score for the play at index 1)
const scoresByRound = roundsArray.map(round => calcRoundScore(round))

// reduce the mapped array to find the sum of all the round scores
const totalScore = scoresByRound.reduce((prev, curr) => prev + curr, 0)

console.log(totalScore)


