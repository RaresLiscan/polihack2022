const net = require("net");
const { sendData } = require("./websocket");

const port = 7070;
const host = "192.168.137.1";

const server = net.createServer();

let sockets = [];

server.on("connection", function (sock) {
  console.log("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort);
  sockets.push(sock);

  sock.on("data", function (data) {
    console.log("DATA " + sock.remoteAddress + ": " + data);
    console.log([...data]);
    sendData([...data]);
  });

  sock.on("error", function (error) {
    console.error(error);
  });
});

server.listen(port, host, () => {
  console.log("TCP Server is running on port " + port + ".");
});
