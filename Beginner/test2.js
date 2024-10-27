// write a function reverseString(s) that takes a string s and reverses it
function reverseString(s){
    // split string into an array of characters, reverse then join back to string
   return s.split('').reverse().join('');
}
console.log(reverseString("hello"));
console.log(reverseString("world"));

// modify function to check for empty string or ignore spaces
function reverseString(h){
if(!h) return "Empty string"
return h.split('').reverse().join('');
}

console.log(reverseString("")) // should return Empty string
console.log(reverseString("javascript"));