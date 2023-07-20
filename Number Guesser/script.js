let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

//function that takes two numbers and returns the distance
const getAbsoluteDistance = (num1, target) => {
    return Math.abs(target - num1);
};

const compareGuesses = (human, computer, target) => {
    if (human < 0 || human > 9) {
        alert('Invalid number');
    };
    const humanDifference = getAbsoluteDistance(human, target);
    const computerDifference = getAbsoluteDistance(computer, target);
    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    };
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    };
}

const advanceRound = () => {
    currentRoundNumber++;
};

