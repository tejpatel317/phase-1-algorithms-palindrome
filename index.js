function isPalindrome(word) {
  let startingCounter = 0;
  let endingCounter = word.length-1;
  let value = true;
  let stopValue = (word.length-1)/2
  for (startingCounter=0; startingCounter<stopValue; startingCounter++) {
    if (word.charAt(startingCounter) === word.charAt(endingCounter)) {
      value = true;
    }
    else {
      value = false;
      return value
    }
    endingCounter--
  }
  return value
}

/* 
  Write a function with takes a word as a string
  Set starting counter to 0.
  Set ending counter to lenth of the string minus 1
  Set boolean equal to true
  Write a for loop which continues as long as the starting counter is half the length of the string minus 1
    -> We use half the length because we need to test only to the half way point of the word
    -> If the word has an odd number of letters, the middle letter does not matter.
    -> If the word has an even number of letters, the loop will check every letter. 
  The for loop has an if statement which will return true if the character at the starting counter is equal to the character at the ending counter.
  Else, the boolean will equal false
The starting counter will be incremented by one
The ending counter will be decremented by one 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
