function getComputerChoice() {
  let x = Math.floor(Math.random()*3);
  if (x == 0) {
    return "rock";
  }
  else if (x == 1) {
    return "paper";
  }
  else if (x == 2) {
    return "scissors";
  }
  else {
    console.log("wtf");
  }
}

function getHumanChoice() {
  let choice = prompt("rock, paper, or scissors?").toLowerCase();
  if (choice != "rock" && choice != "paper" && choice != "scissors") {
    console.log("Please pick a valid option");
    return getHumanChoice();
  }
  return choice;
}

function choiceToNum(choice) {
  if (choice == "rock") return 0;
  else if (choice == "paper") return 1;
  else if (choice == "scissors") return 2;
  else console.log("wtf2");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let h = choiceToNum(humanChoice);
  let c = choiceToNum(computerChoice);

  if (h == c) {
    console.log(`Computer picked ${computerChoice}. You drew.`);
  }
  else if (h == (c+1)%3) {
    console.log(`Computer picked ${computerChoice}. You won.`);
    humanScore++;
  }
  else {
    console.log(`Computer picked ${computerChoice}. You lost.`);
    computerScore++;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5 || humanScore == computerScore; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    alert("YOU WON!");
  }
  else {
    alert("YOU LOSE!");
  }
}

playGame();

// console.log("hi");