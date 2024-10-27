// write a function isPalindrome(word) that takes a string word and returns true
// if it reads the same forward and backward, otherwise return false
function isPalindrome(word){
    // convert to lowercase for case-insensitivity
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord === lowerCaseWord.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); // Should print true
console.log(isPalindrome("hello"));   // Should print false
console.log(isPalindrome("Madam")); // should print true (case insensitive check)

