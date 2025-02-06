document.addEventListener("DOMContentLoaded", function () {
  const tempInput = document.getElementById("temp");
  const unitSelect = document.getElementById("unit");
  const convertButton = document.querySelector("button");
  const resultText = document.getElementById("conversion-text");

  convertButton.addEventListener("click", function () {
    let tempValue = tempInput.value.trim();
    let selectedUnit = unitSelect.value;

    let temperature = parseFloat(tempValue);

    if (tempValue === "" || isNaN(temperature)) {
      resultText.textContent = "Error: Please enter a valid number!";
      resultText.classList.add("error");
      return;
    }

    if (selectedUnit === "") {
      resultText.textContent = "Error: Please select a unit to convert!";
      resultText.classList.add("error");
      return;
    }

    let convertedTemp;
    if (selectedUnit === "celsius") {
      convertedTemp = ((temperature - 32) * 5) / 9;
      resultText.textContent = `Converted Temperature: ${convertedTemp.toFixed(
        2
      )} °C`;
    } else if (selectedUnit === "fahrenheit") {
      convertedTemp = (temperature * 9) / 5 + 32;
      resultText.textContent = `Converted Temperature: ${convertedTemp.toFixed(
        2
      )} °F`;
    }

    resultText.classList.remove("error");
  });
});
