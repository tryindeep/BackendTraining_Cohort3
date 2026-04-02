const express = require("express");
const app = express();
app.use(express.json());

// function that returns a boolean if the age of  the person is more than 14
// function isOldEnough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

// *********If you know a middileware using will be using below route we have to app.use(middlewarename) above of the routes **********
// 
// Middleware isOldEnough
function isOldEnoughMiddleware(req , res , next) {
    let age = req.body.age;
    if (age >= 14) {
        next(); 
    } else {
        res.status(411).json({
        msg: " you are not of age",
        });
    }
}
// app.use(isOldEnoughMiddleware);
app.get("/ride1", isOldEnoughMiddleware ,(req, res) => {
  res.json({
    msg: "You have succesfully riden the ride 1",
  });
});

app.get("/ride2", isOldEnoughMiddleware ,(req, res) => {
    res.json({
      msg: "You have succesfully riden the ride 1",
    });
});

app.listen(3000);
