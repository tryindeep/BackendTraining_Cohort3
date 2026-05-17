let x: number | string = 1; // let x= 1; type inferentcing

// x = "Tridip"
// console.log(x);

// arguments

function geetings(name: string) {
  console.log("Hello " + name); 
}
geetings("Tridip");

//sum function
function sum(num1: number, num2: number):number { // : number is telling return type 
  return num1 + num2;
}
let ans = sum(10, 20);
console.log(ans);

/// return true false age is above 18+ or not
function isLegal(age: number) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(2));


// create a function that takes another function as a input and runs it after 1 second

function  delayedCall (fn: () => void ){  // fn : (function arguments if any) => return if any | void 
    setTimeout(fn , 1000)
}


delayedCall(function (){
    console.log("Tridip");
    
})


// // arrow function

// let greet = () => {
//     console.log("hello there");
    
// }

