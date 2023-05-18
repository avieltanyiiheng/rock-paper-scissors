let computerChoice;

const choice = ["rock", "paper", "scissors"];
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let playerScore = 0;
let computerScore = 0;
const results = document.querySelector(".results");
const playerText = document.querySelector(".playerScore");
const computerText = document.querySelector(".computerScore");

function getComputerChoice() {
  // get random index value
  const randomIndex = Math.floor(Math.random() * choice.length);

  //store computer choice
  const computerChoice = choice[randomIndex];

  return computerChoice;
}
let playerSelection = "";

function playGame() {
  if (playerScore !== 5 || computerScore !== 5) {
    const computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection == "paper") {
      results.textContent = `u lose as computer choice is ${computerSelection} and your choice is ${playerSelection}`;
      computerScore++;
      playerText.textContent = `PlayerScore: ${playerScore}`;
      computerText.textContent = `ComputerScore: ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      results.textContent = `u win as computer choice is ${computerSelection} and your choice is ${playerSelection}`;
      playerScore++;
      playerText.textContent = `PlayerScore: ${playerScore}`;
      computerText.textContent = `ComputerScore: ${computerScore}`;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      results.textContent = `u lose as computer choice is ${computerSelection} and your choice is ${playerSelection}`;
      computerScore++;
      playerText.textContent = `PlayerScore: ${playerScore}`;
      computerText.textContent = `ComputerScore: ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      results.textContent = `u win as computer choice is ${computerSelection} and your choice is ${playerSelection}`;
      playerScore++;
      playerText.textContent = `PlayerScore: ${playerScore}`;
      computerText.textContent = `ComputerScore: ${computerScore}`;
    } else if (playerSelection === computerSelection) {
      results.textContent = `dfraw ${computerSelection}  ${playerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      results.textContent = `u lose as computer choice is ${computerSelection} and your choice is ${playerSelection}`;
      computerScore++;
      playerText.textContent = `PlayerScore: ${playerScore}`;
      computerText.textContent = `ComputerScore: ${computerScore}`;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      results.textContent = `u win as computer choice is ${computerSelection} and your choice is ${playerSelection}`;
      playerScore++;
      playerText.textContent = `PlayerScore: ${playerScore}`;
      computerText.textContent = `ComputerScore: ${computerScore}`;
    }
  } else {
    results.textContent = "GAMEOVER";
  }
}

rock.addEventListener("click", function () {
  playerSelection = "rock";
  playGame();
});

paper.addEventListener("click", function () {
  playerSelection = "paper";
  playGame();
});

scissors.addEventListener("click", function () {
  playerSelection = "scissors";
  playGame();
});
