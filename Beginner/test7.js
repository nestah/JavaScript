// counting vowels in a string
// write a function vowelCount(str) that takes a string str and returns the count of vowels
// a,e,i,o,u it contains
// using regular expression
// g- Ensures that all occurrences of vowels in the string are matched, rather than stopping after the first match.
// ? ternary operater checks if char is not null
// char.length will return the length of vowels
// otherwise return 0 will execute if null/no vowels found

function countVowels(str){
    const char = str.match(/[aeiou]/gi); // 'g' for global match, 'i' for case-insensitive
    return char? char.length:0;
}
console.log(countVowels("hi there how many vowels are in this line"));