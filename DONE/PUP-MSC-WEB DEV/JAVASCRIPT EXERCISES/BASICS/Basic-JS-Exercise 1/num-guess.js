const randomNum = Math.floor(Math.random() * 100) + 1;

console.log("Random Number (for debugging):", randomNum);

let correct = false;

for (let attempts = 1; attempts <= 5; attempts++) {
  let guess = prompt(
    `Attempt ${attempts}: Guess the number between 1 and 100.`
  );

  guess = Number(guess);

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
    attempts--;
    continue;
  }

  console.log(`User guess: ${guess}`);

  if (guess === randomNum) {
    alert(`Congratulations! You guessed the correct number: ${randomNum}`);
    correct = true;
    break;
  } else if (guess < randomNum) {
    alert("Higher");
  } else {
    alert("Lower");
  }

  if (attempts === 5 && !correct) {
    alert(
      `Sorry, you've used all attempts! The correct number was: ${randomNum}`
    );
  }
}
