const buttons = document.querySelectorAll("button");
const resultMessage = document.getElementById("results");
const userScr = document.getElementById("user-score");
const computerScr = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const results = playRound(button.id, computerChoice());
        resultMessage.innerHTML = results;
    });
});

function computerChoice () {
    const choices = ['rock', 'paper', 'scissor'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerChoice) {
    if(playerSelection === computerChoice) {
        return "It's a tie.";
    }else if(
        (playerSelection === "rock" && computerChoice === "scissor") ||
        (playerSelection === "scissor" && computerChoice === "paper") ||
        (playerSelection === "paper" && computerChoice === "rock")) {
            playerScore++;
            userScr.innerHTML = playerScore;
            return "You Win! " + playerSelection + " beats " + computerChoice;
        }else {
            computerScore++;
            computerScr.innerHTML = computerScore;
            return "Computer wins! " + computerChoice + " beats " + playerSelection;
        }
};