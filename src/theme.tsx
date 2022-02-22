import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    background: {
      default: "#F5F5F5",
    },
    primary: {
      main: '#fb8c00',
    },
    secondary: {
      main: '#546e7a',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    allVariants: {
      letterSpacing: 0.4,
    },
    h1: {
      letterSpacing: 0,
      fontSize: 28,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 14,
      fontWeight: 'bold',
    }
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: 10,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
          alignSelf: 'center',
          maxWidth: 1136,
          width: '100%',
          padding: 5,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          justifyContent: 'space-between',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: 'flex',
          margin: 3,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          fontWeight: 'bold',
          letterSpacing: .7,
        }
      }
    }
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: '#FFF3',
    //       borderStyle: 'none'
    //     }
    //   }
    // },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: '#FFF3',
    //       borderStyle: 'none'
    //     }
    //   }
    // }
  }
});
