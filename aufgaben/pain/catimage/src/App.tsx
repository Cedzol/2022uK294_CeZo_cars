import { AppBar, Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, {useEffect, useState} from 'react';
import './App.css';
import RandomCatForm from './RandomCatForm';
import {CatImageService} from "./service/CatImageService";


function App() {
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
      <Box>
        <Container>
          <AppBar>
          </AppBar>
          <RandomCatForm onSubmit={handleRandomCatFormSubmit} />
          <div>
                {cards.map((card) => {
                    return (
                        <div className={"table"}>
                            <div>
                                <table className={"dataResult"}>
                                    <tr className="list-group-items">
                                        <td>{card.name}</td>
                                        <td><img src={card.imageUrl}></img></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    )
                })}
            </div>
        
        </Container>
      </Box>
  );


}

export default App;
