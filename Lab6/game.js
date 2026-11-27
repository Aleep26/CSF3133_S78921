// -- Global variables --
let gameStarted = false; // true after a valid name is entered
let wins = 0;
let losses = 0;
let draws = 0;
let results = [];
const headerRow = "<tr><th>Round</th><th>You</th><th>Computer</th><th>Result</th></tr>";

// -- startGame() --
function startGame() {
  let name = document.getElementById("playerName").value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  document.getElementById("Welcome").innerHTML = "Welcome, " + name + "!";
  document.getElementById("startTime").innerHTML = "Started: " + Date();
  gameStarted = true;
}

// -- getComputerChoice() --
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// -- determineWinner() --
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return "Win";
  }

  return "Lose";
}

// -- updateScoreAndColor() --
function updateScoreAndColor(result) {
  let resultEl = document.getElementById("result");
  resultEl.innerHTML = "You " + result + "!";

  if (result === "Win") {
    resultEl.style.color = "green";
    wins++;
  } else if (result === "Lose") {
    resultEl.style.color = "red";
    losses++;
  } else {
    resultEl.style.color = "grey";
    draws++;
  }

  document.getElementById("winCount").innerHTML = wins;
  document.getElementById("lossCount").innerHTML = losses;
  document.getElementById("drawCount").innerHTML = draws;
}

// -- playRound() --
function playRound(playerChoice) {
  if (!gameStarted) {
    alert("Click Start Game first.");
    return;
  }

  let computerChoice = getComputerChoice();
  let result = determineWinner(playerChoice, computerChoice);

  // Change both images
  document.getElementById("playerImg").src = playerChoice + ".png";
  document.getElementById("computerImg").src = computerChoice + ".png";

  updateScoreAndColor(result);

  // Store result and append a history row
  results.push(result);
  document.getElementById("history").innerHTML +=
    "<tr><td>" + results.length + "</td><td>" + playerChoice + "</td><td>" +
    computerChoice + "</td><td>" + result + "</td></tr>";
}

// -- showSummary() --
function showSummary() {
  let winCount = 0;

  for (let i = 0; i < results.length; i++) {
    if (results[i] === "Win") {
      winCount++;
    }
  }

  let percent = results.length === 0 ? 0 : Math.round((winCount / results.length) * 100);
  document.getElementById("summary").innerHTML =
    "You played " + results.length + " rounds and won " + percent + "%";
}

// -- resetGame() --
function resetGame() {
  gameStarted = false;
  wins = 0;
  losses = 0;
  draws = 0;
  results = [];

  document.getElementById("playerName").value = "";
  document.getElementById("Welcome").innerHTML = "";
  document.getElementById("startTime").innerHTML = "";

  document.getElementById("winCount").innerHTML = 0;
  document.getElementById("lossCount").innerHTML = 0;
  document.getElementById("drawCount").innerHTML = 0;
  document.getElementById("history").innerHTML = headerRow;
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.color = "";
  document.getElementById("summary").innerHTML = "";

  document.getElementById("playerImg").src = "rock.png";
  document.getElementById("computerImg").src = "rock.png";
}