import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

let started = false;
function App() {
  useEffect(() => {
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
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
