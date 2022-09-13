const rpsOptions = ["Rock", "Paper", "Scissors"];


function getComputerChoice (rpsOptions) {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
}

console.log(getComputerChoice(rpsOptions));
