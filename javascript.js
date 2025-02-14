let humanScore = 0;
let computerScore = 0;
let gameOver = false;  // Add this line at the top

const container = document.querySelector("#container");
const message = document.querySelector("#message");
const score = document.querySelector("#score");
const humanScoreDiv = document.querySelector("#human-score");
const computerScoreDiv = document.querySelector("#computer-score");

function getRandomInt(max = 3) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt()];
}

humanScoreDiv.textContent = `You: ${humanScore}`;
computerScoreDiv.textContent = `Computer: ${computerScore}`;
message.textContent = "Best of five!\n\nFirst to three points win!";

container.addEventListener("click", (e) => {
    if (e.target.matches("button") && !gameOver) {
        const humanChoice = e.target.dataset.choice;
        playRound(humanChoice, getComputerChoice());

        setTimeout(() => {
            if (humanScore === 3 || computerScore === 3) {
                if (humanScore > computerScore) {
                    alert("Congratulations! You won the game!");
                } else {
                    alert("You lost the game! Better luck next time!");
                }
                humanScore = 0;
                computerScore = 0;
                humanScoreDiv.textContent = `You: ${humanScore}`;
                computerScoreDiv.textContent = `Computer: ${computerScore}`;
                message.textContent = "Game reset! Make your choice!";
            }
        }, 100);
    }
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        message.textContent = `It's a draw!\n\nYou both chose ${humanChoice}!`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        message.textContent = `You win!\n\nThe computer chose ${computerChoice} and is beaten by ${humanChoice}!`;
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        message.textContent = `You lose!\n\nThe computer chose ${computerChoice} and ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        message.textContent = `You win!\n\nThe computer chose ${computerChoice} and is beaten by ${humanChoice}!`;
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        message.textContent = `You lose!\n\nThe computer chose ${computerChoice} and ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        message.textContent = `You win!\n\nThe computer chose ${computerChoice} and is beaten by ${humanChoice}!`;
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        message.textContent = `You lose!\n\nThe computer chose ${computerChoice} and ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }
    humanScoreDiv.textContent = `You: ${humanScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
}