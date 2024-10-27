// write a function a maxOfThree(a,b,c) that takes 3 numbers and returns the greatest of the three
function maxOfThree(a,b,c){
    return Math.max(a,b,c);
}
console.log(maxOfThree(2,5,7)); //return 7
console.log(maxOfThree(-2,-5,0)); //return 0

//challenge: write without using Math.max ; use an if else to find the greatest number of the three
function maxOfThree(a,b,c){
    let max;
    if(a>=b && a>=c){
     max = a; // a is the greatest
    }else if(b>=a && b>=c){
     max=b; // b is the greatest
    }
    else{max=c} // c is the greatest
    return max;
 }
 console.log(maxOfThree(2,5,8));