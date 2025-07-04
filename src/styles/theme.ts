import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#3f51b5' },
    secondary: { main: '#f50057' }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: 'none' }
      }
    }
  }
});

export default theme;
