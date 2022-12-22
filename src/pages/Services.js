import React, { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


import Header from './common/Header'
import theme from '../config/theme'

import backgroundImage from '../assets/img/services-bg.png';

const Services = () => {

  const serviceList = ['Direct Taxation', 'Company Reg.', 'GST', 'Tax Planning', 'Start Up', 'Compliance / Audit'];
  
  useEffect(() => {
    document.title = 'Services | Hello CA';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Grid
          container
          justifyContent="center"
        >
          <Grid
            container
            component='main'
            maxWidth='lg'>
            <Box
              xs={12}
              align='center'
              sx={{
                width: '100%',
                mt: 5,
                mb: 5
              }}
            >
              <Typography
                component='h2'
                variant='h2'
              >
                Queries We Answer
              </Typography>
            </Box>

            <Grid container component='section'>
              {serviceList.map((service) => (
              <Grid
                item
                component='article'
                align='center'
                xs={12}
                md={4}
                sx={{
                  p: 3,
                }}
              >
                <Paper
                  variant='outlined'
                  sx={{
                    p : 4,
                    backgroundColor: '#fff',
                    border: '1px solid',
                    borderColor: theme.palette.primary.main
                    }}
                  >
                  <Typography
                    component='h6'
                    variant='h6'
                    sx={{
                      textTransform: 'uppercase'
                    }}
                  >
                  {service}
                  </Typography>
                </Paper>
              </Grid>
              ))}
            </Grid>
            
            <Box
              xs= {12}
              align='center'
              sx={{
                width: '100%',
                mt: 3,
                mb: 3
              }}
            >
              <Button type='submit' variant='contained' size="large" >
                Get Started
              </Button>
            </Box>

          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Services