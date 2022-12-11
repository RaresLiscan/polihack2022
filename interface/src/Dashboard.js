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

let index = 0;
let started = 0;

export default function Dashboard() {
  const [data, setData] = useState([
    { name: "Page A", uv: 4000 },
    { name: "Page B", uv: 3000 },
    { name: "Page C", uv: 2000 },
    { name: "Page D" },
    { name: "Page E", uv: 1890 },
    { name: "Page F", uv: 2390 },
    { name: "Page G", uv: 3490 },
  ]);

  useEffect(() => {
    if (!started) {
      setInterval(() => {
        setData((prevData) => [
          ...prevData,
          { name: `Page ${index}`, uv: 3600 + 10 * index },
        ]);
        index++;
      }, 1000);
      started = 1;
    }
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <h1>Humidity Chart</h1>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            connectNulls
            isAnimationActive={false}
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
