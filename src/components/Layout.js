import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Users from "@mui/icons-material/Group";
import Calendar from "@mui/icons-material/CalendarMonth";
import Projects from "@mui/icons-material/AccountTree";
import Help from "@mui/icons-material/HelpCenter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

const Layout = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
          width: "100%",
          zIndex: 99999999999999,
        }}
      >
        <p style={{ padding: "10px 20px" }}>LOGO</p>
        <p style={{ padding: "10px 20px" }}>
          <NotificationsIcon />
        </p>
      </nav>

      <Grid container>
        <Grid
          item
          xs={6}
          sm={4}
          md={2}
          style={{
            height: "100%",
            paddingTop: 70,
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <List>
            {[
              { label: "Home", icon: <HomeIcon />, route: "/home" },
              {
                label: "Dashboard",
                icon: <DashboardIcon />,
                route: "/dashboard",
              },
              { label: "Users", icon: <Users />, route: "/users" },
              { label: "Calendar", icon: <Calendar />, route: "/calender" },
              { label: "Projects", icon: <Projects />, route: "/project" },
              { label: "Help", icon: <Help />, route: "/help" },
            ].map(({ label, icon, route }, index) => (
              <ListItem key={label} disablePadding>
                <ListItemButton to={route}>
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
        </Grid>

        <Grid
          item
          xs={6}
          sm={8}
          md={10}
          style={{
            backgroundColor: "lightgray",
            paddingTop: 70,
            marginLeft: "auto",
          }}
        >
          <Box component="main" sx={{ p: 3 }}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
