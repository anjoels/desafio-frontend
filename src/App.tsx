import React from 'react';
import { Container, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import SiteHeader from './components/SiteHeader';
import GridVideos from './components/GridVideos';
import MainVideoPanel from './components/MainVideoPanel';
import SquarePopUp from './components/SquarePopUp';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <SiteHeader />
        <div>
          <div>
            <MainVideoPanel />
            <SquarePopUp />
          </div>
          <GridVideos />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
