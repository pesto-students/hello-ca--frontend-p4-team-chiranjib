import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Avatar from '@mui/material/Avatar';

import Header from './common/Header'
import theme from '../config/theme'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
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


const CaDashbaord = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    document.title = 'CA Dashbaord | Hello CA';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid container justifyContent="center">
        <Grid container component='main' maxWidth="lg" spacing={5}>
          <Grid item component='section' xs={12} sm={12} md={9} sx={{p: 0}} >
            <Paper elevation={0} variant='outlined' sx={{p : 4, backgroundColor: theme.palette.background.dark, border: '2px solid', borderColor: theme.palette.primary.main }}>
              <Typography component='h1' variant='h1' fontSize={20}>
                Welcome, CA enable topics to get calls
              </Typography>
              <Box component='form' noValidate onSubmit='' sx={{ mt: 1 }}>
                <Button variant='contained' size='small' color='secondary' sx={{border: '2px solid', borderColor: theme.palette.primary.main}}>
                  Tax
                </Button>
                <br/>
                <Button type='submit' variant='contained' size="large" sx={{mt: 4}}>
                  Update Specialization
                </Button>
              </Box>
            </Paper>

            <Box sx={{mt : 4}}>
              <Box sx={{ p: 0, borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Calls History" {...a11yProps(0)} />
                  <Tab label="Payout History" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <TableContainer component={Table} sx={{backgroundColor: '#fff'}}>
                  <Table aria-label="simple table" >
                    <TableHead sx={{ '&:first-child th, &:first-child th': { border: 1, color: theme.palette.primary.main, backgroundColor: theme.palette.background.dark, fontWeight: '700' }}}>
                      <TableRow>
                        <TableCell align="center">Date / Time</TableCell>
                        <TableCell align="center">Duration</TableCell>
                        <TableCell align="center">Topic</TableCell>
                        <TableCell align="center">Listen</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key='' sx={{ td : { border: 1, color: theme.palette.primary.main } }}>
                          <TableCell align="center">1 Oct 2022, 12 PM</TableCell>
                          <TableCell align="center">32 Mins</TableCell>
                          <TableCell align="center">Tax, GST</TableCell>
                          <TableCell align="center">Click to listen</TableCell>
                        </TableRow>
                        <TableRow key='' sx={{ td : { border: 1, color: theme.palette.primary.main } }}>
                          <TableCell align="center">1 Oct 2022, 12 PM</TableCell>
                          <TableCell align="center">32 Mins</TableCell>
                          <TableCell align="center">Tax, GST</TableCell>
                          <TableCell align="center">Click to listen</TableCell>
                        </TableRow>
                        <TableRow key='' sx={{ td : { border: 1, color: theme.palette.primary.main } }}>
                          <TableCell align="center">1 Oct 2022, 12 PM</TableCell>
                          <TableCell align="center">32 Mins</TableCell>
                          <TableCell align="center">Tax, GST</TableCell>
                          <TableCell align="center">Click to listen</TableCell>
                        </TableRow>
                        <TableRow key='' sx={{ td : { border: 1, color: theme.palette.primary.main } }}>
                          <TableCell align="center">1 Oct 2022, 12 PM</TableCell>
                          <TableCell align="center">32 Mins</TableCell>
                          <TableCell align="center">Tax, GST</TableCell>
                          <TableCell align="center">Click to listen</TableCell>
                        </TableRow>
                        <TableRow key='' sx={{ td : { border: 1, color: theme.palette.primary.main } }}>
                          <TableCell align="center">1 Oct 2022, 12 PM</TableCell>
                          <TableCell align="center">32 Mins</TableCell>
                          <TableCell align="center">Tax, GST</TableCell>
                          <TableCell align="center">Click to listen</TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel value={value} index={1}>
              <TableContainer component={Table} sx={{backgroundColor: '#fff'}}>
                  <Table aria-label="simple table" >
                    <TableHead sx={{ '&:first-child th, &:first-child th': { border: 1, color: theme.palette.primary.main, backgroundColor: theme.palette.background.dark, fontWeight: '700' }}}>
                      <TableRow>
                        <TableCell align="center">Date / Time</TableCell>
                        <TableCell align="center">Total Amount</TableCell>
                        <TableCell align="center">Mins</TableCell>
                        <TableCell align="center">Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key='' sx={{ td : { border: 1, color: theme.palette.primary.main } }}>
                          <TableCell align="center">1 Oct 2022, 12 PM</TableCell>
                          <TableCell align="center">₹ 500</TableCell>
                          <TableCell align="center">30</TableCell>
                          <TableCell align="center">Sucess</TableCell>
                        </TableRow>
                        <TableRow key='' sx={{ td : { border: 1, color: theme.palette.primary.main } }}>
                          <TableCell align="center">1 Oct 2022, 12 PM</TableCell>
                          <TableCell align="center">₹ 500</TableCell>
                          <TableCell align="center">30</TableCell>
                          <TableCell align="center">Sucess</TableCell>
                        </TableRow>
                        <TableRow key='' sx={{ td : { border: 1, color: theme.palette.primary.main } }}>
                          <TableCell align="center">1 Oct 2022, 12 PM</TableCell>
                          <TableCell align="center">₹ 500</TableCell>
                          <TableCell align="center">30</TableCell>
                          <TableCell align="center">Sucess</TableCell>
                        </TableRow>
                        <TableRow key='' sx={{ td : { border: 1, color: theme.palette.primary.main } }}>
                          <TableCell align="center">1 Oct 2022, 12 PM</TableCell>
                          <TableCell align="center">₹ 500</TableCell>
                          <TableCell align="center">30</TableCell>
                          <TableCell align="center">Sucess</TableCell>
                        </TableRow>
                        <TableRow key='' sx={{ td : { border: 1, color: theme.palette.primary.main } }}>
                          <TableCell align="center">1 Oct 2022, 12 PM</TableCell>
                          <TableCell align="center">₹ 500</TableCell>
                          <TableCell align="center">30</TableCell>
                          <TableCell align="center">Sucess</TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </Box>
            

          </Grid>
          <Grid item component='section' xs={12} sm={12} md={3}>
            <Paper elevation={0} sx={{pt : 1, pr : 3, pl : 3, pb : 3, display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(to right bottom, #007FFF, #003479 120%)', color: '#fff' }}>
              
              <FormGroup>
                <FormControlLabel control={<Switch />} label="Status Offline" />
              </FormGroup>

              <Typography component='span' fontSize={55} fontWeight={700}>
                <Typography component='span' fontSize={25}>
                  ₹
                </Typography>
                10,000
              </Typography>
              <Typography component='span' fontSize={18} sx={{ mt: -1 }}>
                Total Amount Earned
              </Typography>
            </Paper>
            <Paper elevation={0} variant='outlined' sx={{mt: 4, p : 4, border: '2px solid', borderColor: theme.palette.primary.main }} justifyContent="center">
              <Avatar alt="Remy Sharp" sx={{ width: 125, height: 125, margin: 'auto' }}>BK</Avatar>

              <Typography component='p' fontSize={13} sx={{ mt: 3, color: 'gray' }}>
                Name :  First Name Last Name
              </Typography>
              
              <Typography component='p' fontSize={13} sx={{ mt: 1, color: 'gray' }}>
                Mobile : +91 00000 00000
              </Typography>

              <Typography component='p' fontSize={13} sx={{ mt: 1, color: 'gray' }}>
                CA Reg. No : xxxxxxxxxxxx
              </Typography>

              <Typography component='p' fontSize={13} sx={{ mt: 1, color: 'gray' }}>
                Last Payout : Rs. 7,000.00
              </Typography>

              <Button type='submit' variant='contained' size='medium' fullWidth={true} sx={{ mt: 4}}>
                Update Profile
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default CaDashbaord