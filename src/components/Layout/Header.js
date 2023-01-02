import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import theme from "../../config/theme";
import Logo from "../../components/Logo";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getUserDetails } from "../../store/common/User/actions";
import AuthMenu from "./AuthMenu";

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
    if (localStorage.getItem("authToken")) {
      props.getUserDetails();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <nav>
        <AppBar position="static" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Logo />
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                    display: { xs: "block", md: "none" },
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
                  display: { xs: "none", md: "flex" },
                  marginLeft: "auto",
                }}
              >
                {pages.map((page) => (
                  <Button
                    component={NavLink}
                    to={"/" + page.replace(" ", "-")}
                    style={({ isActive }) => ({
                      color: isActive ? theme.palette.primary.main : "black",
                    })}
                    key={"/" + page.replace(" ", "-")}
                    underline="none"
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#000",
                      textTransform: "uppercase",
                      display: "block",
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" }, pl: 2 }}>
                <AuthMenu user={props.user.data} isLoading={props?.user?.loading}/>
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
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
