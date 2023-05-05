// Part 1
console.log(2 && 3);
console.log(2 || 3);

let a;
let b = a || 22;
console.log(b);

console.log(a && "Text");
a = 10;
console.log(a && "Text");

// Part 2
let year = prompt("Enter the year");
year = parseInt(year);
console.log(
  (year % 4 === 0 && year % 100 === 0 && year % 400 === 0 && "Leap year") ||
    (year % 4 === 0 && year % 100 !== 0 && "Leap year") ||
    "Not a leap year"
);

// Part 3
let length_a = prompt("Enter the first length");
let length_b = prompt("Enter the second length");
let length_c = prompt("Enter the third length");
length_a = Number(length_a);
length_b = Number(length_b);
length_c = Number(length_c);
let s = (length_a + length_b + length_c) / 2;
let area = Math.sqrt(s * (s - length_a) * (s - length_b) * (s - length_c));
console.log(area.toFixed(2));

// Part 4
let celcius_input = prompt("Enter the temperature in celcius");
celcius_input = Number(celcius_input);
let fahrenheit = (celcius_input * 9) / 5 + 32;
console.log(Math.round(fahrenheit));
let fahrenheit_input = prompt("Enter the temperature in fahrenheit");
fahrenheit_input = Number(fahrenheit_input);
let celcius = ((fahrenheit_input - 32) * 5) / 9;
console.log(Math.round(celcius));
