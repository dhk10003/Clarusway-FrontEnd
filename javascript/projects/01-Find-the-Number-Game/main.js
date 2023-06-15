const input = document.querySelector("#input");
const checkBtn = document.querySelector("#checkBtn");
const restartBtn = document.querySelector("#restartBtn");
const message = document.querySelector("#message");
const attemptsNum = document.querySelector("#attemptsNum");

let randomNumber = Math.floor(Math.random() * 100) + 1; // generate random number between 1 and 100
console.log(randomNumber);
let attempts = 0; // number of attempts
let closestLow = null; // closest low number
let closestHigh = null; // closest high number

const checkNumber = function () {
  attempts++; // increase number of attempts
  attemptsNum.textContent = attempts; // display number of attempts

  let inputValue = parseInt(input.value); // get input value

  if (inputValue < 1 || inputValue > 100 || isNaN(inputValue)) {
    // check if input value is valid
    message.textContent = "Enter a number between 1 and 100";
  } else if (inputValue === randomNumber) {
    // check if input value is equal to random number
    message.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
    input.disabled = true;
    checkBtn.disabled = true;
  } else if (
    // display closest low number only if there is no closest high number
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
    // display closest low number and closest high number
    closestLow !== null &&
    closestHigh === null &&
    inputValue > randomNumber
  ) {
    closestHigh = inputValue;
    message.textContent = `Enter a number between ${closestLow} and ${closestHigh}`;
  } else if (
    // display closest high number only if there is no closest low number
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
    // display closest high number and closest low number
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
  // restart the game
  randomNumber = Math.floor(Math.random() * 100) + 1; // regenerate random number between 1 and 100
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
