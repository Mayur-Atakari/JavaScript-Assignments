/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/

function countVowels(str) {
  let count = 0;
  // let ch = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let char = "aeiouAEIOU";
  // Your code here
  for (let ch of str) {
    // if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    if (char.includes(ch)) {
      count++;
    }
  }
  return count;
}

let ans = countVowels("hellosumit AE");
console.log(ans);
module.exports = { countVowels };
