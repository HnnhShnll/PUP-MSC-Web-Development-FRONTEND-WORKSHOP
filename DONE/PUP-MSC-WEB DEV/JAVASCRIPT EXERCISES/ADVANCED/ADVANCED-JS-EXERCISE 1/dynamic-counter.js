const counterDisplay = document.querySelector("#counter-text");
const addButton = document.querySelector("#button-add");
const subtractButton = document.querySelector("#button-subtract");

let counterVal = 0;

function updateCounter() {
  counterDisplay.textContent = counterVal;
}

addButton.addEventListener("click", function () {
  if (counterVal < 100) counterVal++;
  updateCounter();
});

subtractButton.addEventListener("click", function () {
  if (counterVal > 0) counterVal--;
  updateCounter();
});
