const express = require("express");
const app = express();
app.use(express.json());


const user = [];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 
        'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup" , (req , res) =>  {
    const username = req.body.username;
    const password = req.body.password;

    if(user.find( u => u.username == username)){
        res.json({
            msg : " You are already singed in"
        })

        return;
    }

    user.push({
        username : username,
        password : password
    })
    res.json({
        msg : "you are signed now"
    })

})


app.post("/signin" ,    (req , res) =>  {
    const username = req.body.username;
    const password = req.body.password;
    // const foundUser = user.find( (u) => {
    //     if(u.username == username && u.password == password){
    //         return true;
    //     }else{
    //          return false ;
    //     }
    // })

    let foundUser = null ;
    for( let i =0 ; i < user.length ; i++){
        if(user[i].username == username && user[i].password){
            foundUser = user[i];
        }

    }

    if(foundUser){
        const token = generateToken();
        foundUser.token = token;
        res.json({
            massage : token 
        })
    }else {
        res.status(403).send({
            msg : "Invalid username or parrword"
        })
    }
})

app.listen(3000);