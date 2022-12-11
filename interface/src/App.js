import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import DevicesIcon from "@mui/icons-material/Devices";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Devices from "./Devices";
import Dashboard from "./Dashboard";
import { initWebSocket } from "./websocket";

const drawerWidth = 240;

export default function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    initWebSocket();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Pheros
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Dashboard", "Devices"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                onClick={() => setPage(index)}
              >
                <ListItemButton
                  style={{
                    backgroundColor: page === index ? "#f0f0f0" : "white",
                  }}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <DashboardIcon /> : <DevicesIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {page === 1 ? <Devices /> : <Dashboard />}
      </Box>
    </Box>
  );
}
