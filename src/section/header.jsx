"use client";
import React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    "About",
    "Careers",
    "History",
    "Services",
    "Projects",
    "Blog",
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", gap: 2, px: 2 }}>
        {/* Logo */}
        <Box
          component="a"
          href="#"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "teal",
            textDecoration: "none",
          }}
        >
          <Box
            component="svg"
            sx={{ height: 32 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 24"
            fill="none"
          >
            <path
              d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547Z"
              fill="currentColor"
            />
          </Box>
        </Box>
        {/* Desktop Navigation */}
        {!isMobile && (
          <List
            sx={{ display: "flex", gap: 4, color: "text.secondary", margin: 0, color: 'white'}}
          >
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: 14,
                      transition: "color 0.3s",
                      "&:hover": { color: "gray" },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        )}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}></Box>
      </Toolbar>

      {/* Mobile Menu */}
      {isMobile && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ mt: 1 }}
          PaperProps={{
            style: { width: "200px" },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item} onClick={handleMenuClose}>
              {item}
            </MenuItem>
          ))}
          <Divider />
          <MenuItem onClick={handleMenuClose}>
            <Button variant="contained" sx={{ width: "100%" }}>
              Login
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button
              variant="outlined"
              sx={{ width: "100%", color: "teal", borderColor: "teal" }}
            >
              Register
            </Button>
          </MenuItem>
        </Menu>
      )}
    </AppBar>
  );
};

export default Header;
