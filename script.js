let computerChoice;

const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // get random index value
  const randomIndex = Math.floor(Math.random() * choice.length);

  //store computer choice
  const computerChoice = choice[randomIndex];

  return computerChoice;
}

function playGame() {
  const playerSelection = prompt("chooce rps");
  const computerSelection = getComputerChoice();
  if (playerSelection === "rock" && computerSelection == "paper") {
    console.log(
      `u lose as computer choice is ${computerSelection} and your choice is ${playerSelection}`
    );
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(
      `u win as computer choice is ${computerSelection} and your choice is ${playerSelection}`
    );
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(
      `u lose as computer choice is ${computerSelection} and your choice is ${playerSelection}`
    );
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      `u win as computer choice is ${computerSelection} and your choice is ${playerSelection}`
    );
  } else if (playerSelection === computerSelection) {
    console.log(`dfraw ${computerSelection}  ${playerSelection}`);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(
      `u lose as computer choice is ${computerSelection} and your choice is ${playerSelection}`
    );
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(
      `u win as computer choice is ${computerSelection} and your choice is ${playerSelection}`
    );
  }
}

playGame();
