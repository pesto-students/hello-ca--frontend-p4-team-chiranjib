import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Logo from '../components/Logo'
import theme from '../config/theme'

import Header from './common/Header'

import displayImg from '../assets/img/girl-hero-bg.png';


const Login = () => {

  useEffect(() => {
    document.title = 'Login | Hello CA';
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    console.log({
      mobile: data.get('mobile'),
      otp: data.get('otp'),
    });

  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Header />
        <Grid item component='section' xs={false} sm={false} md={7} sx={{
            backgroundImage: `url(${displayImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: theme.palette.background.dark,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={12} md={5} component='section'>
          <Box sx={{ my: 4, pl: 10, pr: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: theme.palette.background.default }}>
            
            <Logo />

            <Typography component='h1' variant='h1' sx={{ mb: 4 }}>
              Login
            </Typography>
            <Typography component='div' variant='p' sx={{ mb: 4 }}>
              Welcome Back !
            </Typography>
            <Box component='form' noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
              
              <FormControl sx={{ mb: 4 }}>
                <InputLabel>Please Enter Mobile</InputLabel>
                <OutlinedInput name='mobile' placeholder='00000 00000' autoFocus required/>
              </FormControl>

              <FormControl sx={{ mb: 2 }}>
                <InputLabel>Please Enter OTP</InputLabel>
                <OutlinedInput name='otp' placeholder='Please Enter OTP' type='password' required/>
              </FormControl>
              
              <FormControl sx={{ mt: 3, mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button type='submit' variant='contained' size="large" componant=''>
                  Login
                </Button>
              </FormControl>

              <Grid container sx={{ my: 4, pl: 10, pr: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid item>
                  <Link href='/create-account' variant='body1'>
                    {'Don\'t have an account'}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login