// counting vowels in a string
// write a function vowelCount(str) that takes a string str and returns the count of vowels
// a,e,i,o,u it contains
// what you can do?
// 1.convert the string to lower case for case in-sensitivity
// 2. initialize the counter with 0
// 3. loop through each character in the string
function vowelCount(str){
    // covert string to lowercase
    str = str.toLowerCase();

    // initialize a counter for vowels
    let count = 0;
    // use for loop to iterate over the characters of the string
    for(let char of str){
        if(char === 'a' || char ==='e' | char ==='i' || char==='o' || char==='u')
        {count++;}
    

    }
    return count;
}

console.log(vowelCount("hi there how many vowels are in this line"));