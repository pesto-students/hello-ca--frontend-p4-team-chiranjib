/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import MenuItem from "@mui/material/MenuItem";
import theme from "../../config/theme";
import Logo from "../Logo";
import Button from "../../components/Button";
import AuthMenu from "./AuthMenu";
import AuthMenuMobile from "./AuthMenuMobile";

import { getUserDetails } from "../../store/common/User/actions";

import { ThemeProvider } from "@mui/material/styles";

const pages = [
  "home",
  "services",
  "our process",
  "about us",
  "faq",
  "contact us",
  // "login",
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    if (localStorage.getItem("authToken") && !user?.data) {
      dispatch(getUserDetails());
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <nav>
        <AppBar position="static" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters className="mobile-header-container">
              <Logo />
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", lg: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                  <AuthMenuMobile />
                </Menu>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  marginLeft: "auto",
                }}
              >
                {pages.map((page) => (
                  <Link to={`/${page.replace(" ", "-")}`}>
                    <Button
                      label={page.toLocaleUpperCase()}
                      variant={"secondary"}
                      className="nav-menu"
                    />
                  </Link>
                ))}
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" }, pl: 2 }}>
                <AuthMenu />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </nav>
    </ThemeProvider>
  );
}

export default Header;
