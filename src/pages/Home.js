import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Header from './common/Header'
import theme from '../config/theme'

import displayImg from '../assets/img/girl-hero-bg.png';
import backgroundImage from '../assets/img/network-hero-bg.jpg';

const Home = () => {

  useEffect(() => {
    document.title = 'Hello CA - CA Just Call Away';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          width: '100vw',
          minHeight: '100vh',
      }}
      >
        <Header />
        <Grid container component='section' direction="row" justifyContent="center" alignItems="center">
          <CssBaseline />    
          <Grid item xs={12} sm={12} md={7} component='section' sx={{pl: 5}}>
            <Typography variant="h1" component="h1" align="left" sx={{fontSize: 40, color: '#1f396d', lineHeight: '60px'}}>
              Get All Your <br/> Queries Answered <br/> By Our Experienced
            </Typography>
            <Typography variant="h1" component="h1" align="left" sx={{fontSize: 60, color: '#000', lineHeight: '100px'}}>
              Charted Accountants
            </Typography>
            <Box sx={{ mt: 3, mb: 3}}>
              <Button type='submit' variant='contained' size="large" sx={{fontSize: 20, padding: '10px 50px'}}>
                GET STARTED
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} component='section'>
            <Box component='img' src={`${displayImg}`} alt='Hello CA - Get CA advice on call' loading='lazy' minHeight='600px' height='600px'></Box>
          </Grid>
        </Grid>

      </Box>
    </ThemeProvider>
  );
}

export default Home