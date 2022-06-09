import React, {useEffect, useState} from 'react';
import { AppBar, Grid, List, } from '@mui/material';
import { Box, Container } from '@mui/system';


const RandomCatList = ({cards}: {cards: any[]}) => {
   
    return (
        <Grid container>
          <Grid item xs={12}>
            {cards.map(card => {
              return (
                <List>
                    <p>{card.name}</p>
                    <img src={card.imageUrl}></img>
                </List> 

              )
            }).reverse()}
          </Grid>
        </Grid>
      );
  };


export default RandomCatList;