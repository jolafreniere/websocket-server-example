const websocket = require("ws");
const wss = new websocket.Server({ port: 3000 })
const MESSAGES_PER_CONNECTION = 5;
let connectionCount = 0;

wss.on('connection', async function connection(ws) {

    let connectionId = connectionCount++;
    let messagesSent = 0;
    console.log(`Connection #${connectionId} established.`);

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        if(message.toString().indexOf("exit") > -1){
            console.log("Received exit command, closing server...");
            process.exit(0);
        }
    });

    ws.on("close", function () {
        console.log(`Connection #${connectionId} has been closed.`);
    })

    ws.send(`[SERVER] Connection #${connectionId} established.`);

    while(messagesSent++ < MESSAGES_PER_CONNECTION){
        await new Promise(resolve => setTimeout(resolve, 2987 + Math.random() * 1000));
        let msg = `[SERVER] Sending to connection #${connectionId}: Server Message #${messagesSent}`;
        console.log("sending: %s", msg);
        ws.send(msg);

        if(messagesSent == MESSAGES_PER_CONNECTION){
            ws.close();
            return;
        }
    }

});