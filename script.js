const rpsOptions = ["Rock", "Paper", "Scissors"];
var cpuScore = 0;
var playerScore = 0;
let pPick;
let computerPicks;
let roundResult;

const playerPicks = document.querySelectorAll('.rps-option');

const displayPlayerChoice = document.querySelector('#result');
const playerChoice = document.createElement('div');
playerChoice.classList.add('display-results');
displayPlayerChoice.append(playerChoice);

const showPlayerChoice = document.querySelector('.display-results');
const pChoiceText = document.createElement('p');
const cpuChoiceText = document.createElement('p');
const roundResultText = document.createElement('p');
const playerScoreTally = document.createElement('p');
const cpuScoreTally = document.createElement('p');
showPlayerChoice.append(pChoiceText, cpuChoiceText, roundResultText, playerScoreTally, cpuScoreTally);


function getComputerChoice () {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
}


playerPicks.forEach((pick) => {
    pick.addEventListener('click', e => {
        pPick = pick.id;
        computerPicks = getComputerChoice().toLowerCase();
        playRound();

        pChoiceText.textContent = "Player Chose: " + pPick;
        cpuChoiceText.textContent = "Computer Chose: " + computerPicks;
        roundResultText.textContent = "Result: " + roundResult;
        playerScoreTally.textContent = "Your Score: " + playerScore;
        cpuScoreTally.textContent = "Computer Score: " + cpuScore;
    });
});



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






//for (let i = 0; i < 5; i++) {
// function playCompleteGame() {
//         playRound();  
// }
// function gameProgress() {
//     if (i < 4) {
//         return "The game is still in progress. Who will win???"
//     } else {
//         return finalScore();
//     }
// } 
        
//}


// function finalScore() {
//     if (playerScore === cpuScore) {
//     return "The game has resulted in a tie. Would you like to play again?";
// } else if (playerScore > cpuScore) {
//     return "Congrats! You won the game " + playerScore + " to " + cpuScore + "!!";
// } else {
//     return "Sorry...You lost the game " + cpuScore + " to " + playerScore + ".";
// }
// }

