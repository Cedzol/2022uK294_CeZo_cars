import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import './components/Organisms/Molecules/RandomCatForm'
import './components/Organisms/Molecules/RandomCatList'
import RandomCatList from "./components/Organisms/Molecules/RandomCatList";
import RandomCatForm from "./components/Organisms/Molecules/RandomCatForm";

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
