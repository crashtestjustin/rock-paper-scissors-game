const rpsOptions = ["Rock", "Paper", "Scissors"];
var cpuScore = 0;
var playerScore = 0;
//let playerChose =  playerChoice();

function getComputerChoice () {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
}

function playerChoice() {
    var selection = prompt("Rock, Paper, or Scissors?");
    return selection
}

function playRound () { 
        computerSelection = getComputerChoice().toLowerCase();
        playerSelection = playerChoice().toLowerCase();
    if (playerSelection == computerSelection) {
        return "This round is a tie!"; 
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "scissors") ||
               (playerSelection === "scissors" && computerSelection === "rock")  
    ){
        cpuScore++;
        return loss = "You lose this round! " + computerSelection + " beats " + playerSelection + "!";
    } else {
        playerScore++;
        return win = "You won this round! " + playerSelection + " beats " + computerSelection + "!";
    }
}

for (let i = 0; i < 5; i++) {
function game() {
        playRound();  
}
function gameProgress() {
    if (i < 4) {
        return "The game is still in progress. Who will win???"
    } else {
        return finalScore();
    }
} 
        console.log(playRound());
        console.log("Computer Score: " + cpuScore);
        console.log("Your Score: " + playerScore);    
        console.log(gameProgress());
}


function finalScore() {
    if (playerScore === cpuScore) {
    return "The game has resulted in a tie. Would you like to play again?";
} else if (playerScore > cpuScore) {
    return "Congrats! You won the game " + playerScore + " to " + cpuScore + "!!";
} else {
    return "Sorry...You lost the game " + cpuScore + " to " + playerScore + "!!";
}
}