const rpsOptions = ["Rock", "Paper", "Scissors"];
var cpuScore = 0;
var playerScore = 0;
let pPick;
let computerPicks;
let roundResult;

const playerPicks = document.querySelectorAll('.rps-option');
playerPicks.forEach((pick) => {
    pick.addEventListener('click', e => {
        pPick = pick.id;
        computerPicks = getComputerChoice().toLowerCase();
        console.log(pPick);
        console.log(computerPicks);
        playRound();
        console.log("Computer Score: " + cpuScore);
        console.log("Your Score: " + playerScore); 
        console.log(roundResult);
    });
});

function getComputerChoice () {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
}

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

