//declaring variables
const rpsOptions = ["Rock", "Paper", "Scissors"];
var cpuScore = 0;
var playerScore = 0;
var roundCounter = 1;
let pPick;
let computerPicks;
let roundResult;
let progress;

//selectors
const playerPicks = document.querySelectorAll('.rps-option');
const playerScoreTally = document.querySelector('#player-score');
const cpuScoreTally = document.querySelector('#computer-score');
const pChoiceText = document.querySelector('#player-round-choice');
const cpuChoiceText = document.querySelector('#computer-round-choice');

//creating a div within the #results-details div to hold the round results and 5 round game progress
const displayPlayerChoice = document.querySelector('#result-details');
const playerChoices = document.createElement('div');
playerChoices.classList.add('display-results');
displayPlayerChoice.append(playerChoices);

//creating p elements within the div created above to house the round resuls and overall game progress
const showRoundResults = document.querySelector('.display-results');
const roundResultText = document.createElement('p');
const gameProgress = document.createElement('p');
showRoundResults.append(roundResultText, gameProgress);

//generating a random output from the array declared above
function getComputerChoice () {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
}

//Event listener on all .rps-option buttons as declared above - when clicked sets global variables pPick, computerPicks
//to selections and runs playRound to compare and determine winner
//Updates the innerHTML elements with scores and choices, rune trackProgress, and reveals the round result and game progress
    playerPicks.forEach((pick) => {
        pick.addEventListener('click', e => {
            pPick = pick.id;
            computerPicks = getComputerChoice().toLowerCase();
            playRound();
            playerScoreTally.innerHTML = playerScore;
            cpuScoreTally.innerHTML = cpuScore;
            pChoiceText.innerHTML = pPick;
            cpuChoiceText.innerHTML = computerPicks;
            roundResultText.textContent = "Result: " + roundResult;
            roundCounter++;
            trackProgress();
            gameProgress.textContent = progress;
        });
    });

//run on each click - looks to see if te round counter is still within 5 rounds - if true the progress global variable is
//  = string - else the progress global varable = finalScore
function trackProgress() {
    if (roundCounter < 6) {
        progress = "The game is still in progress. Who will win???"
    } else {
        progress = finalScore();
    }
}

//compares the pPick and computerPicks global variables to determine who wins the round. Updates the roundResult global variable
function playRound () { 
    if (pPick == computerPicks) {
        roundResult = "This round is a tie!"; 
    } else if ((pPick === "rock" && computerPicks === "paper") ||
               (pPick === "paper" && computerPicks === "scissors") ||
               (pPick === "scissors" && computerPicks === "rock")  
    ){
        cpuScore++;
        roundResult = "You lose this round! " + computerPicks + " beats " + pPick + "!";
    } else {
        playerScore++;
        roundResult = "You won this round! " + pPick + " beats " + computerPicks + "!";
    }
}

//returns the final gmae outcome after 5 rounds have been played which is set to the global progress variable in the 
//  trackProgress function
function finalScore() {
    if (playerScore === cpuScore) {
    return "The game has resulted in a tie. Would you like to play again?";
} else if (playerScore > cpuScore) {
    return "Congrats! You won the game " + playerScore + " to " + cpuScore + "!!";
} else {
    return "Sorry...You lost the game " + cpuScore + " to " + playerScore + ".";
}
}




