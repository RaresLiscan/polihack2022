import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useWebSocket from "./useWebSocket";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function createData(name, humidity, rain) {
  return { name, humidity, rain };
}

export default function Devices() {
  const websocket = useWebSocket();
  let devices = [];
  let websocketArray = [...websocket];
  websocketArray.reverse();
  console.log("websocketArray: ", websocketArray);
  const rows = websocketArray.filter((entry) => {
    if (!devices.find((device) => device === entry.from)) {
      devices.push(entry.from);
      return entry;
    }
  });

  return (
    <>
      <h1>Connected devices</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Device address</TableCell>
              <TableCell align="right">Latest humidity</TableCell>
              <TableCell align="right">Rain coefficient</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.from}
                </TableCell>
                <TableCell
                  align="right"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {row.humidity}
                  {row.humidity >= 50 && (
                    <WarningAmberIcon titleAccess="The sack should be changed" />
                  )}
                </TableCell>
                <TableCell align="right">{row.rainCoefficient}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
