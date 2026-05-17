function TwoSum(a: number, b: number): number {
  return a + b;
}
console.log(TwoSum(1, 3));

function greet(name: string): string {
  return "Hello " + name;
}
const greeting = greet("tridip");
console.log(greeting);

function isEven(num: number): boolean {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(1000));

//  interface and types

//------------------1. INTERFACE------------------------------

// // If you have to make complex object, to deal with it we use Interfaces

// interface Address{
//     city: string;
//     contry: string;
//     pincode: number;

// }

// interface User {
//   name: string;
//   age: number;
//     // to make specific key optional  use  "?"
//   address: Address;
// }

//     // interfaces can use other interfaces
// interface Office {
//   address: Address;
// }

// let user: User = {
//   name: "Tridip",
//   age: 21,
//   address: {
//     city: "Kolkata",
//     contry: "india",
//     pincode: 700105,
//   },
// };

////
// function isLegal(user: User): boolean {
//   return user.age > 18;
// }

// const ans = isLegal(user);

// if (ans) {
//   console.log("i can vote");
// } else {
//   console.log("i can't vote");
// }

// Implemeting interfaces

// interface People{
//     name: string,
//     age: number,
//     greet() : string
//     // greet: () => string  same thing 
// }

// Variable
// const person : People = {
//     name : "Tridip",
//     age : 23,
//     greet() : string {
//         return "hi"
//     },
// }

// let  answer = person.greet();
// console.log(answer);


// Crating a class that implements interface 

interface People{
    name: string,
    age: number,
    // greet() : stringsame same thing 
    // greet: () => string ;
    isLegal(): boolean;
}


class Manager2 implements People {
     // using public we don't need this
     // (parameter propaties)
    constructor(public name : string , public age: number) {

    }
    isLegal(){
        return this.age >= 18
    }
}


class God extends Manager2 {
   constructor(name : string , age : number){
    super(name, age)
   }

}

let user1 = new Manager2("John",30);
console.log(user1.isLegal());

/*
    Difference between interface and types
    we can implements interfaces in classes but in types we can't.
*/


// Abstact Classes 
abstract class User1{
    name: string
    constructor(name: string){
        this.name = name;
    }

    abstract greet(): string; // abstract method 

    // we can added default implementations 
    hell0 (){ // default implemented method
        console.log("Hi there");
        
    }
}

class Employee1 extends User1 {
    name: string;
    constructor(name : string){
        super(name);
        this.name = name;
    }

    greet(){
        return "HI " + this.name;
    }
}




// Notes 

//i. Implementing interfaces (types vs interface)
//ii. if a class can implement an iinterfaces what is the point of abastract class  (interfaces vs Abstract class)
// ---> abstract class have default implementions but interface don't have





//-----------------------------2.TYPES---------------------------------------



type CoderType = {
    name: string;
    age: number;
}

function isLegal2(coder : CoderType) : boolean { // coderType as input we can create a type here 
    return coder.age >= 18;
}

// types let you do UNIONS and INTERSECTION 

type Employee = {
    name : string,
    startDate : Date;
}
type Manager = {
    name: string,
    department: string
}

type TeamLead = Employee & Manager;

const teamlead: TeamLead = {
    name: "Tridip",
    startDate: new Date(),
    department: "Software Developer"
}


console.log(teamlead);

// UNION

type GoodPlayer = {
    name: string,
    Trophy: string;
}
type BadPlayer  = {
    name: string,
    Trainning: string;
}


type Player = GoodPlayer | BadPlayer ;

const player : Player = {
    name : "Tridip",    
    Trainning : "Practice Drills"

}

console.log(player);



// ------------------------Arrays In TypeScript-------------------------//

// function getMax(nums: number[]): number {
//    let maxValue = nums[0];

//    for(let i = 0; i < nums.length ; i++){

//     if(nums[i] > maxValue){
//         maxValue = nums[i];
//     }
//    }
//    return maxValue;
// }
// getMax([1, 2, 3]);


interface Address {
    city: string;
    pincode: string;
}

interface User {
    name: string,
    age: number;
    addresses : Address[]; // or {city: string; pincode: string;}[];
}


const user : User ={
    name: "tridip",
    age: 20,
    addresses: [] //or [{}]
}


// Practice Problem 

interface User4 {
    firstName: string;
    lastName : string;
    age: number;
}


function legalUser (users : User4[]) : User4[]{
    return users.filter( x => x.age >= 18 )
}


const filterUser = legalUser([{
    firstName: "Tridip",
    lastName : "Pramanick",
    age: 21
},{
    firstName: "kousik",
    lastName : "das",
    age: 17
}
])


console.log(filterUser);

