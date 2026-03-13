const fs = require ("fs");

const contents = fs.readFile("a.txt" , "utf-8");  // asynchronusly
const contents1 = fs.readFileSync("b.txt" , "utf-8"); // synchronusly
console.log(contents,contents1);
