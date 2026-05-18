// function doSomething (keyPressed) {
//     do something
// }

// what type of keypressed be ?

// Should it be string ? (up , down , right, left)
// or should it be numbers (1,2,3,4)

// The best thing you can use in such case is enums


enum Direction {
    Up=1, 
    Down , 
    Right, 
    Left
}

function doSomething(keypressed : Direction) : Direction{
   return keypressed;
}

console.log(doSomething(Direction.Right));
 
// common useCases in Express 

// enum ResponseStatus {
//     Sucess = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/" (req,res) => {
//     if(!req.query.userId){
//         res.status
//     }
// })


//-------------Generic--------------------//

// 1. Problem Statement
// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
// How would you solve this problem?

// Solution : 

// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }

// const el = getFirstElement([1, 2, 3]);

// What is the problem in this approach?
// User can send different types of values in inputs, without any type errors

// function getFirstElement1(arr: (string | number)[]) {
//     return arr[0];
// }

// const el1 = getFirstElement1(["harkiratSingh", "ramanSingh"]);
// console.log(el1.toLowerCase()) // Problem here

// example 1
function getFirstElement<T>(arr: T[]){
    return arr[0];
}

const el = getFirstElement<string>(["harkiratSingh", "ramanSingh"]);
console.log(el!.toLowerCase())




// example 2
// function identity <T> (arg : T) : T {
//     return arg
// }

// let output1 = identity<string>("My string");
// let output2 = identity<number>(23);
