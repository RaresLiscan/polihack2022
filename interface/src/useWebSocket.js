import React, { useEffect, useState } from "react";
import { getLastWebsocketData, subscribe } from "./websocket";

export default function useWebSocket() {
  const [webSocketData, setWebSocketData] = useState(getLastWebsocketData());

  useEffect(() => {
    subscribe((data) => setWebSocketData(data));
  }, []);

  return webSocketData;
}
