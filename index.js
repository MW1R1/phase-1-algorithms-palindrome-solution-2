// Write your algorithm here
function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}
/* 
  Add your pseudocode here
*/
/*if (word[startIndex] !== word[endIndex]) {
  return false;
}*/
/*
  Add written explanation of your solution here
*/
//isPalindrome function to check wheteher word is palindrome
//split word and reverse then return true or false
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("madam"));  // true
  console.log(isPalindrome("robot"));  // false

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
