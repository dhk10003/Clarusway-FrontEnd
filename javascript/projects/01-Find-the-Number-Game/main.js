const input = document.querySelector("#input");
const checkBtn = document.querySelector("#checkBtn");
const restartBtn = document.querySelector("#restartBtn");
const message = document.querySelector("#message");
const attemptsNum = document.querySelector("#attemptsNum");

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let attempts = 0;
let closestLow = null;
let closestHigh = null;

const checkNumber = function () {
  attempts++;
  attemptsNum.textContent = attempts;

  let inputValue = parseInt(input.value);

  if (inputValue < 1 || inputValue > 100 || isNaN(inputValue)) {
    message.textContent = "Enter a number between 1 and 100";
  } else if (inputValue === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
    input.disabled = true;
    checkBtn.disabled = true;
  } else if (
    closestLow === null &&
    closestHigh === null &&
    inputValue < randomNumber
  ) {
    closestLow = inputValue;
    message.textContent = `Enter a number between ${closestLow} and 100`;
  } else if (
    closestLow !== null &&
    closestHigh === null &&
    inputValue < randomNumber
  ) {
    closestLow = inputValue;
    message.textContent = `Enter a number between ${closestLow} and 100`;
  } else if (
    closestLow !== null &&
    closestHigh === null &&
    inputValue > randomNumber
  ) {
    closestHigh = inputValue;
    message.textContent = `Enter a number between ${closestLow} and ${closestHigh}`;
  } else if (
    closestLow === null &&
    closestHigh === null &&
    inputValue > randomNumber
  ) {
    closestHigh = inputValue;
    message.textContent = `Enter a number between 1 and ${closestHigh}`;
  } else if (
    closestLow === null &&
    closestHigh !== null &&
    inputValue > randomNumber
  ) {
    closestHigh = inputValue;
    message.textContent = `Enter a number between 1 and ${closestHigh}`;
  } else if (
    closestLow === null &&
    closestHigh !== null &&
    inputValue < randomNumber
  ) {
    closestLow = inputValue;
    message.textContent = `Enter a number between ${closestLow} and ${closestHigh}`;
  } else if (inputValue < randomNumber && inputValue > closestLow) {
    closestLow = inputValue;
    message.textContent = `Enter a number between ${closestLow} and ${closestHigh}`;
  } else if (inputValue > randomNumber && inputValue < closestHigh) {
    closestHigh = inputValue;
    message.textContent = `Enter a number between ${closestLow} and ${closestHigh}`;
  }
};

const restart = function () {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  attempts = 0;
  closestLow = null;
  closestHigh = null;
  input.value = "";
  input.disabled = false;
  checkBtn.disabled = false;
  attemptsNum.textContent = attempts;
  message.textContent = "Write the number";
};

checkBtn.addEventListener("click", checkNumber);
restartBtn.addEventListener("click", restart);
