let started = false;

export function initWebSocket() {
  console.log("started: ", started);
  if (started) {
    return;
  }
  const ws = new WebSocket("ws://localhost:7071/");

  ws.onopen = (event) => {
    console.log("Connected to the server");
  };

  ws.onmessage = (message) => {
    // console.log(`Received message: ${message.target}`);
    const json = JSON.parse(message.data);
    console.log("json: ", json);
  };

  ws.onclose = (event) => {
    console.log("Connection closed");
  };

  ws.onerror = (error) => {
    console.error(error);
  };

  started = true;
}
