/*
  Write a function `findDuplicates` which takes an array as input and returns an array containing all the duplicate elements.

  What are duplicates?
  - Elements that appear more than once in the array are considered duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40]
  - Output: [10]

  - Input: [1, 2, 3, 4, 5]
  - Output: []

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-duplicates`
*/

function findDuplicates(arr) {
  // return arr.filter((Element, index) => arr.indexOf(Element) !== index);
  // let countDuplicates = [...new Set(arr)];
  // console.log(countDuplicates);

  let countDuplicates = [];

  let count = 0;

  for (let num of arr) {
    if (countDuplicates.includes(num)) {
      count++;
      countDuplicates = [];
      countDuplicates.push(num);
    } else {
      countDuplicates.push(num);
    }
  }
  return countDuplicates;
}

let ans = findDuplicates([10, 20, 30, 20]);
console.log(ans);
module.exports = findDuplicates;
