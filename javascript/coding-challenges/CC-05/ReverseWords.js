// Purpose of the this coding challenge is to write a code that given a string , returns reverse order of words.
// Write a function that takes an array of characters and reverses the words order.
// Please note that, single word should not be reversed!
// Example:
// input = "impossible. mean not does hard but hard, be to going It’s"
// expected = "It’s going to be hard, but hard does not mean impossible."
// input = "done. you’re when Stop tired. you’re when stop Don’t".
// expected = "Don’t stop when you’re tired. Stop when you’re done."

function reverseWords(message) {
  let words = message.split(" ");
  let reversed = words.reverse().join(" ");
  return reversed;
}

console.log(
  reverseWords("impossible. mean not does hard but hard, be to going It's")
);
console.log(
  reverseWords("done. you're when Stop tired. you're when stop Don't")
);
