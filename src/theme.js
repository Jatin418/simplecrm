import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      bgColor: '#00205A',
      light: '#E5BBFF',
      font: '#FFFFFF',
      grayFont: '#666666',
      blackFont: '#000000',
      borderColor: '#676767',
      boxShadow : '0px 0px 5px rgba(0,0,0,0.25)',
      liveScoreBoxShadow : '0px 3px 5px #C2C2C2',
      liveScoreBoxShadowColor : '#C2C2C2',
      liveBoardColor: '#FF0000'
    },
    secondary: {
      main: '#3F961E',
      light: '#5A8BD8',
      font: '#FFFFFF'
    },
  },
}));