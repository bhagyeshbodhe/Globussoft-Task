import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Users from "@mui/icons-material/Group";
import Calendar from "@mui/icons-material/CalendarMonth";
import Projects from "@mui/icons-material/AccountTree";
import Help from "@mui/icons-material/HelpCenter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { Grid } from "@mui/material";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          color: "black",
          background: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            LogoHere
          </Typography>
          <NotificationsIcon />
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
        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <List>
            {[
              { label: "Home", icon: <HomeIcon /> },
              { label: "Dashboard", icon: <DashboardIcon /> },
              { label: "Users", icon: <Users /> },
              { label: "Calendar", icon: <Calendar /> },
              { label: "Projects", icon: <Projects /> },
              { label: "Help", icon: <Help /> },
            ].map(({ label, icon }, index) => (
              <ListItem key={label} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List>
            {[
              { label: "John Smith", icon: <AccountCircleIcon /> },
              { label: "Settings", icon: <SettingsIcon /> },
            ].map(({ icon, label }, index) => (
              <ListItem key={label} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "lightgray" }}
      >
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <First />
          </Grid>
          <Grid item xs={12} md={4}>
            <Second />
          </Grid>
          <Grid item xs={12} md={4}>
            <Third />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
