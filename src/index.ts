const websocket = require("ws");
const wss = new websocket.Server({ port: 3000 })

wss.on('connection', async function connection(ws) {
    console.log("connection ...");
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send("SERVER: Connection established.");
    while(true){
        await new Promise(resolve => setTimeout(resolve, 3000));
        let msg = `SERVER SENT: ${JSON.stringify(new Date())}`;
        console.log("sending: %s", msg);
        ws.send(msg);
    }
});