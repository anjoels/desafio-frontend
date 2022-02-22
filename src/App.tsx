import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { SiteHeader } from './components';
import { theme } from './theme';
import { Home } from './pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <SiteHeader />
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
