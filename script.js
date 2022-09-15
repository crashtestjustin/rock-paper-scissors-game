const rpsOptions = ["Rock", "Paper", "Scissors"];
var cpuScore = 0;
var playerScore = 0;
let playerChose =  playerChoice();

function getComputerChoice () {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
}

function playerChoice() {
    var selection = prompt("Rock, Paper, or Scissors?");
    return selection
}

function playRound (playerSelection, computerSelection) { 
        computerSelection = getComputerChoice().toLowerCase();
        playerSelection = playerChoice().toLowerCase();
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

for (let i = 1; i < 5; i++) {
function game() {
        playRound();
        if ( i === 5 && playerScore > cpuScore) {
                return "Congrats! You won the game " + playerScore + " to " + cpuScore + " !!"
            } else if ( i === 5 && cpuScore > playerScore) {
                return "Sorry...You lost the game " + cpuScore + " to " + playerScore + " !!"
        } else {
            return "The game is still in progress. Who will win???"
        }
            
}
    console.log(playRound());
    console.log(cpuScore);
    console.log(playerScore);
    console.log(game());
}
