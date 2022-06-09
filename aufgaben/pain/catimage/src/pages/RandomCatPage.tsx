import { AppBar, Grid, Link } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RandomCatForm from './../RandomCatForm';
import RandomCatList from './../RandomCatList';
import {CatImageService} from "./../service/CatImageService";
import HomePage from './HomePage';


const RandomCatPage = () => {
    type Card = {
        name : string,
        imageUrl : string
    }
    
      const [cards, setCards] = useState<Card[]>([])
    
      const handleRandomCatFormSubmit = (myShinyNewCard: Card) => {
        setCards((cards) => [...cards, myShinyNewCard]);
      
      };
    
      const [CatImageUrl, setCatImageUrl] = useState();
      useEffect(() => {
        CatImageService().getRandomCatImage()
            .then((catImageUrl) => setCatImageUrl(catImageUrl));
      }, [])

      return (
          <div>
            <RandomCatForm onSubmit={handleRandomCatFormSubmit} />

            <RandomCatList cards={cards}/>
          </div>
      )
}

export default RandomCatPage;