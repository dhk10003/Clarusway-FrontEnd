const displayItem = document.querySelector(".displayItem");
const keypad = document.querySelector(".keypadContainer");

// Fix bugs after equal button is clicked:
let equalClicked = false;

// store values to the result:
let result = "";
keypad.addEventListener("click", (e) => {
  // Display the value of the button clicked and store it to the result:
  if (e.target.classList.contains("number")) {
    if (equalClicked) {
      displayItem.textContent = "";
      result = "";
      equalClicked = false;
    }
    displayItem.textContent += e.target.value;
    result += Number(e.target.value);
  }

  if (e.target.classList.contains("dot")) {
    displayItem.textContent += e.target.value;
    result += e.target.value;
    equalClicked = false;
  }

  if (e.target.classList.contains("operator")) {
    displayItem.textContent += e.target.textContent;
    result += e.target.value;
    equalClicked = false;
  }

  // clear the display and result:
  if (e.target.classList.contains("ac")) {
    displayItem.textContent = "";
    result = "";
    equalClicked = false;
  }

  // change the sign of the number:
  if (e.target.classList.contains("plusMinus")) {
    if (Number(displayItem.textContent)) {
      displayItem.textContent = -displayItem.textContent;
      result = -eval(result);
    }
    equalClicked = false;
  }

  // delete the last character:
  if (e.target.classList.contains("back")) {
    displayItem.textContent = displayItem.textContent.slice(0, -1);
    result = result.slice(0, -1);
    equalClicked = false;
  }

  // calculate the result:
  if (e.target.classList.contains("equal")) {
    if (Number.isInteger(eval(result))) {
      displayItem.textContent = eval(result);
      result = eval(result);
      equalClicked = true;
    } else {
      displayItem.textContent = eval(result).toFixed(2);
      result = eval(result).toFixed(2);
      equalClicked = true;
    }
  }
});
