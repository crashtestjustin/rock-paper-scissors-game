const rpsOptions = ["Rock", "Paper", "Scissors"];


function getComputerChoice () {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
}


//take input from player selection
//if player selection == cpu selection: announce tie
//if player selection is rock and cpu selction paper: announce cpu wins
//if player selection is rock and cpu selction scissors: announce player wins
//if player selection is paper and cpu selction scissors: announce cpu wins
//if player selection is paper and cpu selction rock: announce player wins
//if player selection is scissors and cpu selction rock: announce cpu wins
//if player selection is scissors and cpu selction paper: announce player wins
//return message

function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerChoice;
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection == "rock" && computerSelection == "paper") ||
               (playerSelection == "paper" && computerSelection == "scissors") ||
               (playerSelection == "scissors" && computerSelection == "rock")  
    ){
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    } else {
        return "You won! " + playerSelection + " beats " + computerSelection + "!";
    }
}

const playerChoice = "rock";

console.log(playRound());
