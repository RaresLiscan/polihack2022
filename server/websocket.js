const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 7071 });

const clients = new Map();

wss.on("connection", (ws) => {
  //   const id = uuidv4();
  const color = Math.floor(Math.random() * 360);
  const metadata = { color };

  console.log("New ws client connected");

  clients.set(ws, { metadata, ws });

  ws.on("close", () => {
    clients.delete(ws);
  });
});

function sendData(data) {
  clients.forEach((client) => {
    client.ws.send(JSON.stringify(data));
  });
}

module.exports = {
  sendData,
};
