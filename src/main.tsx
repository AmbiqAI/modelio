import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mui/material-pigment-css/styles.css';
// import { Theme } from '@mui/material/styles';
import { ThemeProvider, Theme } from '@mui/material/styles';
import App from './app';
import theme from './styles/theme';

declare module '@mui/material-pigment-css' {
  interface ThemeArgs {
    theme: Theme;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
