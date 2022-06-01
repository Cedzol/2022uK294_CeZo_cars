import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Grid } from '@mui/material';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Box>
        <Container>
          <AppBar>

          </AppBar>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <p>Form here</p>
            </Grid>
            <Grid item xs={12}>
              <p>List here</p>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
