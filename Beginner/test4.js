// ignore non alphabet characters
function isPalindrome(word2){
    // remove all non alphabet characters and convert to lower case
    const cleanedWord = word2.toLowerCase().replace(/[^a-z]/g, '');
    // check if cleaned word is a palindrome
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

console.log("ignore non alphabets:",isPalindrome("A man, a plan, a canal, Panama")); // return true

