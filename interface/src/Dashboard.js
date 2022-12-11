import React, { PureComponent, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useWebSocket from "./useWebSocket";

let index = 0;
let started = 0;

export default function Dashboard() {
  const websocket = useWebSocket();
  console.log("websocket: ", websocket);

  return (
    <div style={{ width: "100%" }}>
      <h1>Humidity Chart</h1>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={websocket}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="at" />
          <YAxis />
          <Tooltip />
          <Line
            connectNulls
            isAnimationActive={false}
            type="monotone"
            dataKey="humidity"
            stroke="#8884d8"
            fill="#8884d8"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <h1>Rain intensity chart</h1>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={websocket}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="at" />
          <YAxis />
          <Tooltip />
          <Line
            connectNulls
            isAnimationActive={false}
            type="monotone"
            dataKey="rainCoefficient"
            stroke="#8884d8"
            fill="#8884d8"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
