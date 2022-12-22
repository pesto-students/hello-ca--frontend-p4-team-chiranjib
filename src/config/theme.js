import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004aad',
    },
    secondary: {
      main: '#e1f0fb',
    },
    background: {
      default: '#fafcfe',
      dark: '#e1f0fb',
    },
  },
  typography: {
    h1: {
      fontSize: '2.1rem',
      fontWeight: 700,
      color: '#004aad',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#004aad',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 400,
      color: '#004aad',
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: 'normal',
        fullWidth: true,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1.1rem',
          textTransform: 'uppercase',
          left: '8px',
          top: '-15px',
        },
      },
      defaultProps: {
        shrink: true
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          paddingLeft: '.7rem',
          paddingRight: '.7rem',
          background: '#fff',
        },
      },
      defaultProps: {
        fullWidth: true
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '3.125rem',
        },
      },
      defaultProps: {
        fullWidth: true
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3.125rem',
          fontStyle: 'normal',
          textTransform: 'none'
          // paddingLeft: '4rem',
          // paddingRight: '4rem'
        },
      },
      defaultProps: {
        disableElevation: true
      },
    },
  },
});

export default theme;