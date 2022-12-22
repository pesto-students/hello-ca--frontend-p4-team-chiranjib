import * as React from 'react';
import { NavLink } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import theme from '../../config/theme'
import Logo from '../../components/Logo'

const pages = ['home', 'services', 'our process', 'about us', 'faq', 'contact us', 'login'];

function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <nav>
        <AppBar position="static" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Logo />
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none'}
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' }, 
                  marginLeft: 'auto'
                }}
              >
                {pages.map((page) => (
                  <Button
                    component={NavLink}
                    to={'/'+page.replace(' ', '-')}
                    style={({ isActive }) => ({
                      color: isActive ? theme.palette.primary.main : 'black'
                    })}
                    key={'/'+page.replace(' ', '-')}
                    underline='none'
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: '#000',
                      textTransform: 'uppercase',
                      display: 'block',
                      fontSize: 16,
                      fontWeight: 700
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, pl: 2 }}>
                <Button href='/create-account' variant='contained' sx={{padding: '5px 40px'}}> SIGN UP </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </nav>
    </ThemeProvider>
  );
}

export default Header;