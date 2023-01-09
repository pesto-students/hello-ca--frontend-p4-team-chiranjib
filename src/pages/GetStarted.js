import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from './common/Header'
import theme from '../config/theme'

import displayImg from '../assets/img/call-illustration-bg.png';

const GetStarted = () => {
  
  useEffect(() => {
    document.title = 'Get Started with Call | Hello CA';
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Grid container component='main' sx={{ height: '100vh' }}>
        
        <Grid item component='section' xs={12}>
          <Typography
            component='h2'
            variant='h2'
            sx={{
              mt: 5,
              mb: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            Get started with Call
          </Typography>
        </Grid>

        <Grid item component='section' xs={12} sm={12} md={6} sx={{ p: 7}}>

          <Typography component='h3' variant='h3'>
            Select your topic for advice
          </Typography>

          <Button variant='contained' size='small' value='dsvsdv' color='secondary'>
            Tax
          </Button>

          <Button variant='contained' size='small' value='sdvdsv' color='secondary'>
            GST
          </Button>

          <Button variant='contained' size='small' value='sdvdsv' color='secondary'>
            Audit
          </Button>

          <Button variant='contained' size='small' value='sdvdsv' color='secondary'>
            Start Up
          </Button>

          <Button variant='contained' size='small' value='sdvdsv' color='secondary'>
            Compliance
          </Button>

          <Button variant='contained' size='small' value='sdvdsv' color='secondary'>
            Registration
          </Button>

          <Button variant='contained' size='small' value='sdvdsv' color='secondary'>
            Tax Planning
          </Button>

          <Button variant='contained' size='small' value='sdvdsv' color='secondary'>
            TDS
          </Button>

          <Button variant='contained' size='small' value='sdvdsv' color='secondary'>
            Partnership
          </Button>

          <br/>

          <Button type='submit' variant='contained' size='large' >
            Get Started
          </Button>

        </Grid>

        <Grid item component='section' xs={false} sm={false} md={6} sx={{
            backgroundImage: `url(${displayImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

      </Grid>
      
    </ThemeProvider>
  );
}

export default GetStarted