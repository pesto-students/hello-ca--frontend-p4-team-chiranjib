import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Header from './common/Header'
import theme from '../config/theme'

import ourProcessImage from '../assets/img/our-process.png';
import backgroundImage from '../assets/img/our-process-bg.png';

const OurProcess = () => {
  
  useEffect(() => {
    document.title = 'Our Process | Hello CA';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    
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

          <Box xs={12}>
            <Typography component='h2' variant='h2' sx={{ mt: 5, mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              Our Process
            </Typography>
          </Box>

          <Grid container component='section' spacing={2} maxWidth="lg" direction="row" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }} sx={{
          backgroundImage: `url(${ourProcessImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          width: '70vw',
          height: '50vh',
          }}>
            
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button type='submit' variant='contained' size="large" >
            Get Started
          </Button>
        </Box>
        
      </Box>
    </ThemeProvider>
  );
}

export default OurProcess