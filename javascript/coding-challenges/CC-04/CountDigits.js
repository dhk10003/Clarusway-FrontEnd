// Suppose we have an integer d between 0 and 9, we also have two positive integers low and high as lower and upper bounds, respectively. We have to find the number of times that d occurs as a digit in all integers between low and high, including the bounds low and high.

// For example, d=2, low= 10, high = 23 then the output will be 5, as digit d = 2 occurs 5 times: 12, 20, 21, 22, 23.
// Write a function that takes a 3 parameters: a digit, lower and upper bounds as integer. The function will calculate how many times the given digit occurs within the numbers including lower and upper bounds.
// Please solve the problem for 0 <= digit < 10 and 0 < low < high, otherwise function should return -1.
// If no occurrences is found in the given range, function should return 0.

const digitCount = function () {
  let digit = +prompt("Enter a digit between 0 and 9: ");
  while (digit < 0 || digit > 9) {
    digit = +prompt("Invalid. Enter a digit between 0 and 9: ");
  }
  let lower = +prompt("Enter a lower bound which is greater than the digit: ");
  let higher = +prompt(
    "Enter a higher bound which is greater than the digit: "
  );
  while (lower >= higher || lower < digit || higher < digit) {
    lower = +prompt(
      "Invalid. Enter a lower bound which is greater than the digit: "
    );
    higher = +prompt(
      "Invalid. Enter a higher bound which is greater than the digit: "
    );
  }
  let count = 0;
  for (let i = lower; i <= higher; i++) {
    let num = i;
    if (num % 10 === digit || Math.floor(num / 10) === digit) {
      count++;
    }
  }
  return count;
};

console.log("Count: ", digitCount());

// Solution:
// const countDigit = (digit, low, high) => {
//   let count = 0
//   for (let i = low; i <= high; i++){
//     let seperate = `${i}`
//     seperate = seperate.split("")
//     for (let j = 0; j < seperate.length; j++){
//       if(seperate[j] == digit){
//         count++
//       }
//     }
//   }
//   return count
// }

// console.log(countDigit(2, 10, 23))
