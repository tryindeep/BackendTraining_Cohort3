// // arrows fns , map , filter

// // 1
// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => {
//   return a + b;
// };


// const ans = sum(1,2);
// console.log(ans);


// map
// given an array , give me back a new array in which every value is multiplied by 2

const input  = [1,2,3,4,5];

// const newArray = input.map((el) => el*2);

// console.log(newArray);

// filter 
const filtingArray = input.filter((el) => el%2 == 0);
console.log(filtingArray);


