let name = "John";     // Variable that can be reassigned
const age = 30;        // Constant variable that cannot be reassigned
var isStudent = true;  // Older way to declare variables, function-scoped

// in c++ its not possible it will throw an error but in js you can do it .
var a = 1;
a = "harkirat";
a = true;

console.log(a)

// DataTypes
let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

// Operators
let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator

//Functions
// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"

// Objects
let user = {
	name: "Harkirat",
	age: 19
}

console.log("Harkirats age is " + user.age);

// Arrays
const users = ["harkirat", "raman", "diljeet"];
const tatalUsers = users.length;
const firstUser = users[0];

// Array of objects
const users1 = [{
		name: "Harkirat",
		age: 21
	}, {
		name: "raman",
		age: 22
	}
]

const user1 = users[0]
const user1Age = users[0].age

// object of objects
const user2 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user2.address.city;

// //Assignment
// const users = [
//   {
//     name: "Tridip",
//     age: 18,
//     city: "Kolkata",
//   },
//   {
//     name: "Tanmoy",
//     age: 20,
//     city: "jaipur",
//   },{
//     name :  "kousik",
//     age : 17,
//     city :"Bangalore"
// }
// ];
// function adults(users) {
//     let res = users.filter((user) => user.age >= 18 ).map((user) => user.name)
//     console.log(res);
    
// }
// adults(users);

