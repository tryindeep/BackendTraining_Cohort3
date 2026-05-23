import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
//event handler
wss.on("connection", function (socket) {
    console.log("User connected");
    setInterval(() => {
        socket.send("Current SOLANA price of solana is :" + Math.random());
    }, 500);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
//# sourceMappingURL=index.js.map