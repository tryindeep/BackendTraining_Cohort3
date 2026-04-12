// fetch
//  function main (){
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(async response => {
//         const json = await response.json();
//         console.log(json);

//     })
// }
// main();

// async function main() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
//     method: "POST",
//     body: {
//       username: "tridip",
//       password: "123456",
//     },
//     headers: {
//       "Authorization": "Bearer 123",
//     },
//   });
//   const json = await response.json();
//   console.log(json);
// }

//// axios
// CHANGE THE REQUEST METHOD
// SEND BODY
// SEND HEADER 
const axios = require("axios");

async function main() {
  const response = await axios.get(
    "https://httpdump.app/dumps/ffc44ae6-d3cc-4c3c-bbd0-a098bf95ca09",
    // {
    //     username : "tridip",
    //     password : "123456"
    // },
    {
      headers: {
        "Authorization": "Bearer 123"
      },
    },
  );
  console.log(response.data.todos);
}

main();
