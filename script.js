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

const results = document.querySelector(".results");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let h = choiceToNum(humanChoice);
  let c = choiceToNum(computerChoice);

  if (h == c) {
    // console.log(`Computer picked ${computerChoice}. You drew.`);
    results.textContent = `Computer picked ${computerChoice}. You drew. Your score: ${humanScore} Computer score: ${computerScore}`;
  }
  else if (h == (c+1)%3) {
    // console.log(`Computer picked ${computerChoice}. You won.`);
    results.textContent = `Computer picked ${computerChoice}. You won. Your score: ${++humanScore} Computer score: ${computerScore}`;
  }
  else {
    // console.log(`Computer picked ${computerChoice}. You lost.`);
    results.textContent = `Computer picked ${computerChoice}. You lost. Your score: ${humanScore} Computer score: ${++computerScore}`;
  }
}

document.querySelectorAll(".choice").forEach(elem => {
  console.log("hi");
  elem.addEventListener("click", e => {
    let c = getComputerChoice();
    playRound(elem.getAttribute("value"), c);
  });
});

// console.log("hi");