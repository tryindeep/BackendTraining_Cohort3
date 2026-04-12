const express = require('express');
const app = express();

app.use(express.json());

// in memory variable 

const users = [];


//  should return random long string
function generateToken (){
    // return Math.random()
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
        'z', 'A','B', 'C', 'D', 'E', 'F', 'G', 'H', 
        'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
         '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

// app.get("/" ,(req , res) => {
//         users.map((u) => {
            
//         })
// });

app.post("/signup" , (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(users.find( u => u.username === username )) {
        res.json({
            massage : " Hey you are already signed Up"
        })
        return; 
    }
    
    users.push({
        username : username,
        password : password
    })
    res.json({
        massage : " hey your are signed Up"
    })

    console.log(users);
    
})

app.post("/signin" , (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(u => u.username == username && u.password == password);
    if(foundUser){
        const token = generateToken();
        foundUser.token = token;
        res.json({
            token : token 
        })

    }else{
        res.status(403).send({
            massage : "Invalid username or password"
        })
    }
     console.log(users);
})

app.listen(3002);