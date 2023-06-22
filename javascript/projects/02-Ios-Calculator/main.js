const upperDisplay = document.querySelector(".upperDisplay");
const displayItem = document.querySelector(".displayItem");
const keypad = document.querySelector(".keypadContainer");

// Fix bugs after equal button is clicked:
let equalClicked = false;

// store values to the result:
let result = "";
keypad.addEventListener("click", (e) => {
  // Display the value of the button clicked and store it to the result:
  if (e.target.classList.contains("number")) {
    if (displayItem.textContent.length > 7) return;
    if (
      equalClicked ||
      (displayItem.textContent === "0" && Number(upperDisplay.textContent)) ||
      (displayItem.textContent === "0" && upperDisplay.textContent === "")
    ) {
      displayItem.textContent = "";
      upperDisplay.textContent = "";
      result = "";
      equalClicked = false;
    }

    if (
      displayItem.textContent === "0" &&
      upperDisplay.textContent !== "" &&
      isNaN(upperDisplay.textContent[upperDisplay.textContent.length - 1])
    ) {
      displayItem.textContent = "";
      equalClicked = false;
    }

    displayItem.textContent += e.target.value;
    result += Number(e.target.value);
  }

  if (e.target.classList.contains("dot")) {
    if (displayItem.textContent.includes(".")) return;
    displayItem.textContent += e.target.value;
    result += e.target.value;
    equalClicked = false;
  }

  if (e.target.classList.contains("operator")) {
    // change the operator if the last character is an operator:
    if (
      isNaN(upperDisplay.textContent[upperDisplay.textContent.length - 1]) &&
      upperDisplay.textContent !== "" &&
      Number(result[result.length - 1])
    ) {
      upperDisplay.textContent = eval(result);
      result = eval(result);
      result += e.target.value;
      upperDisplay.textContent += e.target.textContent;
      displayItem.textContent = "0";
      return;
    } else if (
      isNaN(upperDisplay.textContent[upperDisplay.textContent.length - 1]) &&
      upperDisplay.textContent !== ""
    ) {
      upperDisplay.textContent = upperDisplay.textContent.slice(0, -1);
      result = result.slice(0, -1);
      upperDisplay.textContent += e.target.textContent;
      result += e.target.value;
      return;
    }

    if (displayItem.textContent[displayItem.textContent.length - 1] === ".") {
      return;
    }

    if (displayItem.textContent === "0") {
      displayItem.textContent = "";
    }

    displayItem.textContent += e.target.textContent;
    result += e.target.value;
    upperDisplay.textContent += displayItem.textContent;
    displayItem.textContent = "0";
    equalClicked = false;
  }

  // clear the display and result:
  if (e.target.classList.contains("ac")) {
    displayItem.textContent = "0";
    upperDisplay.textContent = "";
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
    if (displayItem.textContent === "0") return;
    displayItem.textContent = displayItem.textContent.slice(0, -1);
    result = result.slice(0, -1);
    if (displayItem.textContent === "") displayItem.textContent = "0";
    equalClicked = false;
  }

  // calculate the result:
  if (e.target.classList.contains("equal")) {
    if (Number.isInteger(eval(result))) {
      upperDisplay.textContent = eval(result);
      displayItem.textContent = "0";
      result = eval(result);
      equalClicked = true;
    } else {
      upperDisplay.textContent = eval(result).toFixed(2);
      displayItem.textContent = "0";
      result = eval(result).toFixed(2);
      equalClicked = true;
    }
  }
});
