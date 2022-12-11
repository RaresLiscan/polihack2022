const net = require("net");
const { sendData } = require("./websocket");

const port = 7070;
const host = "0.0.0.0";

const server = net.createServer();

let sockets = [];

let websocketData = [];

server.on("connection", function (sock) {
  console.log("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort);
  sockets.push(sock);

  sock.on("data", function (data) {
    console.log("DATA " + sock.remoteAddress + ": " + data);
    console.log([...data]);
    const sensorsData = [...data];
    const humidity = sensorsData[0];
    const rainCoefficient = (sensorsData[1] << 8) + sensorsData[2];
    websocketData.push({
      from: sock.remoteAddress,
      humidity,
      rainCoefficient: Math.abs(1024 - rainCoefficient),
      at: new Date().toISOString().substring(11, 19),
    });
    sendData(websocketData);
  });

  sock.on("error", function (error) {
    console.error(error);
  });
});

server.listen(port, host, () => {
  console.log("TCP Server is running on port " + port + ".");
});
