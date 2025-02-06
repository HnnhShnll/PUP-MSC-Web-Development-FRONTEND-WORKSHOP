const guessInput = document.querySelector("#guess-input");
const guessButton = document.querySelector("#guess-btn");
const resultDiv = document.querySelector("#result-div");
const guessHistoryDiv = document.querySelector("#guess-container");
const newGameButton = document.querySelector("#new-game-div button");
const difficultySelect = document.querySelector("#difficulty-select");

let targetNumber;
let guessCount;
let maxGuesses;
let guesses = [];

function startNewGame() {
  const difficulty = difficultySelect.value;
  maxGuesses = difficulty === "easy" ? 5 : 3;

  targetNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  guesses = [];
  guessInput.disabled = false;
  guessButton.disabled = false;
  resultDiv.textContent = "";
  guessHistoryDiv.innerHTML = "";
  newGameButton.style.display = "none";
}

function makeGuess() {
  if (guessCount >= maxGuesses) {
    resultDiv.textContent = `Game Over! The number was ${targetNumber}.`;
    endGame();
    return;
  }

  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    resultDiv.textContent = "Please enter a number between 1 and 100!";
    return;
  }

  guesses.push(guess);
  guessCount++;

  let guessDiv = document.createElement("div");
  guessDiv.classList.add("previous-guess");

  if (guess === targetNumber) {
    resultDiv.textContent = `Congratulations! The number is ${targetNumber}.`;
    resultDiv.style.color = "darkorchid";
    guessDiv.style.backgroundColor = "darkorchid";
    guessDiv.textContent = guess;
  } else if (guess < targetNumber) {
    resultDiv.textContent = "Higher!";
    resultDiv.style.color = "green";
    guessDiv.style.backgroundColor = "green";
    guessDiv.textContent = guess;
  } else {
    resultDiv.textContent = "Lower!";
    resultDiv.style.color = "red";
    guessDiv.style.backgroundColor = "red";
    guessDiv.textContent = guess;
  }

  guessHistoryDiv.appendChild(guessDiv);

  if (guessCount >= maxGuesses) {
    resultDiv.textContent = `Game Over! The number was ${targetNumber}.`;
    endGame();
  }
}

function endGame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  newGameButton.style.display = "block";
}

guessButton.addEventListener("click", makeGuess);
newGameButton.addEventListener("click", startNewGame);

startNewGame();
