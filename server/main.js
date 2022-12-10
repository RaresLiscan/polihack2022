const net = require("net");

const port = 7070;
const host = "192.168.137.1";

const server = net.createServer();

let sockets = [];

server.on("connection", function (sock) {
  console.log("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort);
  sockets.push(sock);

  sock.on("data", function (data) {
    console.log("DATA " + sock.remoteAddress + ": " + data);
    // Write the data back to all the connected, the client will receive it as data from the server
    sockets.forEach(function (sock, index, array) {
      sock.write(
        sock.remoteAddress + ":" + sock.remotePort + " said " + data + "\n"
      );
    });
  });
});

server.listen(port, host, () => {
  console.log("TCP Server is running on port " + port + ".");
});
