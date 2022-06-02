import React, {useEffect, useState} from 'react';
import { AppBar, Grid } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useFormik } from 'formik';
import {CatImageService} from "./service/CatImageService";

type Card = {
    name : string,
    imageUrl : string
}

const RandomCatForm = ({onSubmit}: {onSubmit: (card: any) => void}) => {
    const [catImageUrl, setCatImageUrl] = useState();
    useEffect(() => {
        CatImageService().getRandomCatImage()
            .then((catImageUrl) => setCatImageUrl(catImageUrl));
      }, [catImageUrl])

    const formik = useFormik({
        initialValues: {
            name: '',
            imageUrl: '',
          },

          validate: values =>{
            
          },
      onSubmit: values => {
        const card = {
          name: values.name,
          imageUrl: catImageUrl
        }
        onSubmit(card);
      }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <button type="submit">Submit</button>
        </form>
      );
  };

  export default RandomCatForm