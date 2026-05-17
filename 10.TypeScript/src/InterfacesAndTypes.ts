// function greet (user : {
//     name: string,
//     age : number,
// }){
//     console.log("Hello " + user.name);
// }

// // let user = {
// //     name: "Tridip",
// //     age: 21
// // }
// greet(user);

// // Interfaces and Types
// let firstname : string = "harkirat"
// let age: number = 21

// // Problem
// function greet(user: { // we are repeating ourself
//     firstname : string,
//     age : number
// }){

// }

// let user: {
//     firstname : string,
//     age : number
// } = {
//     firstname: "Tridip",
//     age: 21
// }

// // Solution - interfaces

// // example 1
// interface UserType {
//     firstname : string,
//     age : number,
//     lastname : string
// }

// function greet2(user: UserType){

// }

// let user2: UserType ={
//     firstname: "Tridip",
//     age: 21,
//     lastname : "Pramanick"
// }

// //example 2
// interface TodoType {
//     title: string;
//     description: string;
//     done : boolean;
// }

// interface TodoInput {
//     todo : TodoType
// }

// function Todo ({todo} : TodoInput) {

// }



// Types
// interface User {
//   name: string;
//   age: number;
// }
// types give something extra
// type UserType = {
//   name: string;
//   age: number;
// };


// let user : UserType  = {
//     name: "Tridip",
//     age: 21
// }


// union in type 
type StringOrNumber = string | number;

// ts can sum number + string 
// ts can sum number + number
// ts can sum string + number
// ts can sum string + string 

// but ts can't sum  (string | number) + (string | number)

function sum(a: StringOrNumber , b: StringOrNumber){
    return a+b; // error
}


// intersectin in type
type Employee = {
    name : string;
    startDate: Date;
}

type Manager = {
    name : string;
    department : string;
}

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "Tridip",
    startDate: new Date(),
    department: "Software Developer"
}