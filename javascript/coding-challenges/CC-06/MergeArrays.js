// Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.
// Write a function that takes two arrays consist of numbers and combines them into one sorted array as result.
// Please note that, empty arrays to be checked to avoid exception!
// Example:
// mergeArrays([], [7, 8, 9]);
// expected_result = [7, 8, 9];
// mergeArrays([12, 14, 16], [11, 13, 17]);
// expected_result = [11, 12, 13, 14, 16, 17];
// mergeArrays([22, 24, 26, 28], [21, 27]);
// expected_result = [21, 22, 24, 26, 27, 28];

const mergeArrays = function (ArrayA, ArrayB) {
  let mergedArray = [];
  mergedArray = ArrayA.concat(ArrayB);
  mergedArray.sort(function (a, b) {
    return a - b;
  });
  return mergedArray;
};

console.log(mergeArrays([], [7, 8, 9]));
console.log(mergeArrays([12, 14, 16], [11, 13, 17]));
console.log(mergeArrays([22, 24, 26, 28], [21, 27]));
