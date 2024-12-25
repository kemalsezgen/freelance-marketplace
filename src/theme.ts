import { createTheme } from '@mui/material/styles';
import { COLOURS } from './constants';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLOURS.GREEN,
    },
    background: {
      default: COLOURS.WHITE,
      paper: COLOURS.GREY,
    },
    text: {
      primary: COLOURS.DARK_BLUE,
      secondary: COLOURS.DARK_GREY,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0FB56C',
    },
    background: {
      default: '#121212',
      paper: '#1D1D1D',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
  },
});
