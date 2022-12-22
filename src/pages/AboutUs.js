import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Header from './common/Header'
import theme from '../config/theme'

import backgroundImage from '../assets/img/about-us-bg.png';

const AboutUs = () => {
  
  useEffect(() => {
    document.title = 'About Us | Hello CA';
  }, []);


  return (
    <ThemeProvider theme={theme}>
      
      <Box sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
        }}>
        <Header />
        <Grid container component='main' direction="row" justifyContent="center" alignItems="center">
          <CssBaseline />
          <Grid item component='section' maxWidth="md">

            <Typography component='h2' variant='h2' sx={{ mt: 5, mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              About Us
            </Typography>

            <Typography component='p' variant='h6' sx={{ mt: 5, mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }} align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula dapibus tincidunt. Duis sapien elit, euismod sed vestibulum quis, sagittis ut massa. Donec at neque eget lacus placerat sodales.
            </Typography>

            <Box sx={{ mt: 3, mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button type='submit' variant='contained' size="large" >
                CONTACT US
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default AboutUs