import { AppBar, Grid, Link } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RandomCatForm from './RandomCatForm';
import RandomCatList from './RandomCatList';
import {CatImageService} from "./service/CatImageService";
import HomePage from './pages/HomePage';
import RandomCatPage from './pages/RandomCatPage';


function App() {

  return (
      <Box>
        <Container>
          <AppBar>
            <Link href="/home">Home</Link>
            <Link href="/cats">Cats</Link>
          </AppBar>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/cats' element={<RandomCatPage/>}/>
              </Routes>
          </BrowserRouter>
        </Container>
      </Box>
  );


}

export default App;
