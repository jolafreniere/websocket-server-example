# Websocket Server

This project contains a very basic example of how to use websockets on a server to send and receive messages from a client's open connection.
The client-side code associated with this project can be found [here](https://github.com/jolafreniere/websocket-client-example/)

## Usage

```sh
npm install
npm run start:build
```

## Implementation Details

The server listens for incoming connection requests from the client application. The connection is assigned a unique number that corresponds to the amount of connections that have previously been opened. This number is set back to 0 every time the application is restarted.

The server listens to messages sent to the client and logs them, as well as sending a given amount of messages himself. Once the server has sent that *arbitrary* amount of messages to the client, it closes the connection.

If the server receives the message "exit" from any connection, the application closes.

## Further Reading

Refer to the [client application repository](https://github.com/jolafreniere/websocket-client-example/)