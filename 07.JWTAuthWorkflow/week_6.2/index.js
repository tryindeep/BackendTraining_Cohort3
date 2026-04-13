const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "IAMTRIDIPANANDA";
const app = express();
app.use(express.json());

const users = [];

const logger = (req, res,next) => {
  console.log(req.method + " request came");
  next();
}

app.use(logger);


app.get("/", function (req,res){
    res.sendFile(__dirname+"/public/index.html")
} );

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const foundUser = users.find((user) => user.username == username);

  if (foundUser) {
    res.json({
      massage: "Hey you are already signed UP ",
    });
  } else {
    users.push({
      username: username,
      password: password,
    });

    res.json({
      massage: " hey your are signed Up",
    });
  }
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find(
    (user) => user.username == username && user.password == password,
  );

  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET,
    );
    res.header("jwt", token);
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid Credentials",
    });
  }
});
// Authentication Midlleware
const authentication = (req, res, next) => {
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token, JWT_SECRET);
  if(decodedInformation){
    req.username = decodedInformation.username;
    next();
  }else {
    res.json({
      message : "You are not logged In "
    })
  }
};


app.get("/me", authentication, (req, res) => {
  const foundUser = users.find((user) => user.username == req.username);
  if(foundUser){
    res.json({
      username : foundUser.username,
      password : foundUser.password
    })
  }
});

app.listen(9000);
