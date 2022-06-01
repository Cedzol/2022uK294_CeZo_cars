import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import './components/Molecules/RandomCatForm'
import './components/Molecules/RandomCatList'
import RandomCatList from "./components/Molecules/RandomCatList";
import RandomCatForm from "./components/Molecules/RandomCatForm";

function App() {
  return (
    <div className="App">
      <Box>
        <Container>
          <AppBar></AppBar>

          <RandomCatForm></RandomCatForm>
          <RandomCatList></RandomCatList>

        </Container>
      </Box>
    </div>
  );
}

export default App;
