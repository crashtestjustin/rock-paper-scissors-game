const rpsOptions = ["Rock", "Paper", "Scissors"];
var cpuScore = 0;
var playerScore = 0;


function getComputerChoice () {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
}

function playRound (playerSelection, computerSelection) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        computerSelection = getComputerChoice().toLowerCase();
        playerSelection = playerChoice.toLowerCase();
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "scissors") ||
               (playerSelection === "scissors" && computerSelection === "rock")  
    ){
        cpuScore++;
        return loss = "You lose! " + computerSelection + " beats " + playerSelection + "!";
    } else {
        playerScore++;
        return win = "You won! " + playerSelection + " beats " + computerSelection + "!";
    }
}

//create a function for tallying score
//input the function in the for loop????

function game(playerScore, cpuScore) {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
        if (playerScore > cpuScore) {
                return "Congrats! You won the game " + playerScore + " to " + cpuScore + " !!"
            } else if (cpuScore > playerScore) {
                return "Sorry...You lost the game " + cpuScore + " to " + playerScore + " !!"
        } else {
            return "The game is still in progress. Who will win???"
}
}


console.log(playRound());
console.log(playerScore);
console.log(cpuScore);
console.log(game());