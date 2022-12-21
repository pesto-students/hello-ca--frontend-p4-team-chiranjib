import React, { useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Logo from '../components/Logo'
import theme from '../config/theme'

import displayImg from '../assets/img/girl-hero-bg.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CreateAccount = () => {

  const [value, setValue] = React.useState(0);

  const [type, setType] = React.useState('user');

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    document.title = 'Create New Account | Hello CA';
  }, []);

  const handleCreateAccount = (event) => {
    event.preventDefault();
  };

  const handleCreateUserAccount = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name').split(' ');

    var data = qs.stringify({
      'first_name': name[0],
      'last_name': name[1],
      'country_code': '91',
      'mobile': formData.get('mobile'),
      'user_type': 'USER'
    });

    var config = {
      method: 'POST',
      url: 'https://helloca-backend.onrender.com/auth/register',
      headers: { 
        //'Authorization': 'Bearer {{authorization}}', 
        'Content-Type': 'application/x-www-form-urlencoded',
        responseType: 'json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    

    // axios.get(baseUrl + url.long)
    // .then(function (response) {
    //   setUrl({short : response.data.result.short_link})
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .finally(function () {
    //   // always executed
    // });
    
    console.log({
      name: formData.get('name').split(' '),
      mobile: formData.get('mobile'),
      otp: formData.get('otp'),
    });

  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container component='main' sx={{ height: '100vh' }}>
        <Grid item component='section' xs={false} sm={false} md={7} sx={{
            backgroundImage: `url(${displayImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: theme.palette.background.dark,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={12} md={5} component='section'>
          <Box sx={{ my: 2, pl: 10, pr: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: theme.palette.background.default }}>
            
            <Logo />
            
            <Typography component='h1' variant='h1' sx={{ mb: 1 }}>
              Create new Account
            </Typography>
            <Typography component='div' sx={{ mb: 4 }}>
              <Link href='/login' variant='body1' sx={{ color: 'gray' }}>
                {'Already Registered? Login'}
              </Link>
            </Typography>
            <Box component='form' noValidate onSubmit={handleCreateUserAccount} sx={{ mt: 1 }}>

              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Tabs value={value} onChange={handleTabChange} aria-label="select account type" >
                  <Tab label="I am User" {...a11yProps(0)} />
                  <Tab label="I am CA" {...a11yProps(1)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                  <FormControl sx={{ mb: 4 }}>
                    <InputLabel>Please enter your name</InputLabel>
                    <OutlinedInput name='name' placeholder='First Name Last Name' autoFocus required/>
                  </FormControl>

                  <FormControl sx={{ mb: 4 }}>
                    <InputLabel>Please Enter Mobile</InputLabel>
                    <OutlinedInput inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} name='mobile' placeholder='00000 00000' required/>
                  </FormControl>

                  <FormControl sx={{ mb: 2 }}>
                    <InputLabel>please enter OTP received on mobile</InputLabel>
                    <OutlinedInput name='otp' placeholder='Please Enter OTP' type='password' required disabled/>
                  </FormControl>
                  
                  <FormControl sx={{ mt: 3, mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button type='submit' variant='contained' size="large" value="Create User Account">
                      Create User Account
                    </Button>
                  </FormControl>
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <FormControl sx={{ mb: 4 }}>
                    <InputLabel>Please enter your name</InputLabel>
                    <OutlinedInput name='name' placeholder='First Name Last Name' required/>
                  </FormControl>

                  <FormControl sx={{ mb: 4 }}>
                    <InputLabel>Please ENTER CA reg. number</InputLabel>
                    <OutlinedInput name='canumber' placeholder='NRO0123456' required/>
                  </FormControl>

                  <FormControl sx={{ mb: 4 }}>
                    <InputLabel>Please Enter Mobile</InputLabel>
                    <OutlinedInput inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} name='mobile' placeholder='00000 00000' required/>
                  </FormControl>

                  <FormControl sx={{ mb: 2 }}>
                    <InputLabel>Please enter OTP received on mobile</InputLabel>
                    <OutlinedInput name='otp' placeholder='Please Enter OTP' type='password' required/>
                  </FormControl>
                  
                  <FormControl sx={{ mt: 3, mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button type='submit' variant='contained' size="large" >
                      Create CA Account
                    </Button>
                  </FormControl>
                </TabPanel>

              </Box>

              <Grid container sx={{ pl: 10, pr: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid item>
                  <Link href='/' variant='body1'>
                    {'Back to Home'}
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

export default CreateAccount