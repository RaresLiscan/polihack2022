let started = false;

let listeners = [];

let lastWebsocketData = [];

export function getLastWebsocketData() {
  return lastWebsocketData;
}

export function subscribe(listener) {
  listeners.push(listener);
}

export function initWebSocket() {
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
    listeners.forEach((listener) => listener(json));
    lastWebsocketData = json;
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
