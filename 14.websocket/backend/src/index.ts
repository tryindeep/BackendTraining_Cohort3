import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port : 8080})


//event handler
wss.on("connection", function(socket) {
    // setInterval(() => {
    //      socket.send("Current SOLANA price of solana is :"+ Math.random());
    // }, 500);
    // client
    socket.on("message", (e) => {
        if(e.toString() === "ping") {
            socket.send("pong")
        }
    })
})