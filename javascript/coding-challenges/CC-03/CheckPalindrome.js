function palindrome() {
  let string = prompt("Enter a word: ");
  let remove = /[\W_]/g;
  let lowerCaseString = string.toLowerCase().replace(remove, "");
  let result = "";
  for (let i = lowerCaseString.length - 1; i >= 0; i--) {
    result += lowerCaseString[i];
  }
  if (result === lowerCaseString) {
    console.log("This is a palindrome");
  } else {
    console.log("This is not a palindrome");
  }
}

palindrome();
