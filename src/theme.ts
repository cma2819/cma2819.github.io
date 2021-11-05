import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(createTheme({
  palette: {
    twitter: {
      main: '#1da1f2'
    },
    twitch: {
      main: '#6441A4'
    },
    github: {
      main: '#333'
    },
  },
}));

export type Theme = typeof theme;
declare module '@mui/material/styles' {
  interface Palette {
    twitter: Palette['primary'];
    twitch: Palette['primary'];
    github: Palette['primary'];
  }

  interface PaletteOptions {
    twitter: PaletteOptions['primary'];
    twitch: PaletteOptions['primary'];
    github: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    twitter: true;
    twitch: true;
    github: true;
  }
}