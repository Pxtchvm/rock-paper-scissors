function getRandomInt(max = 3) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice = getRandomInt();

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?", "");
    return humanChoice.toLowerCase().trim();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a draw! You both chose ${humanChoice}!`);
            humanScore++;
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`You win! The computer chose ${computerChoice} and is beaten by ${humanChoice}!`);
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(`You lose! The computer chose ${computerChoice} and ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(`You win! The computer chose ${computerChoice} and is beaten by ${humanChoice}!`);
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log(`You lose! The computer chose ${computerChoice} and ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You win! The computer chose ${computerChoice} and is beaten by ${humanChoice}!`);
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`You lose! The computer chose ${computerChoice} and ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        } 
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`You: ${humanScore}\nComputer: ${computerScore}`);
    }
    
    if (humanScore > computerScore) {
        console.log(`\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}\nCongratulations! You won the game!`);
    } else if (humanScore < computerScore) {
        console.log(`\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}\nYou lost the game! Better luck next time!`);
    } else {
        console.log(`\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}\nThe game ended in a draw! That's crazy!`);
    }
}

playGame();