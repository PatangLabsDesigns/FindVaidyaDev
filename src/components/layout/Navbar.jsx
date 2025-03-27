import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import logo from "../../assets/logo-light.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={logo} alt="FindVaidya Logo" style={{ height: "40px" }} />
        </Box>
        <IconButton color="inherit" onClick={handleDrawerToggle}>
          <IconX />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={RouterLink}
            to={item.path}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: "center", mt: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/login"
            sx={{ mr: 1 }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/register"
          >
            List your practice for free
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{ backgroundColor: "white" }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={logo} alt="FindVaidya Logo" style={{ height: "40px" }} />
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <IconMenu2 />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{ mx: 1 }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="outlined"
                color="primary"
                component={RouterLink}
                to="/login"
                sx={{ ml: 2, mr: 1 }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/register"
              >
                List your practice for free
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
