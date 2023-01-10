import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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

import {
  getUserDetails,
  removeUserDetails,
} from "../../store/common/User/actions";

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

function Header(props) {
  console.log(props);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    if (localStorage.getItem("authToken") && !props?.user?.data) {
      props.getUserDetails();
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
                </Menu>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
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
                <AuthMenu
                  user={props.user.data}
                  isLoading={props?.user?.loading}
                  logout={props.removeUserDetails}
                />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </nav>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUserDetails: getUserDetails,
      removeUserDetails: removeUserDetails,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
