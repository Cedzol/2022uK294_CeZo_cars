import React, {useEffect, useState} from 'react';
import { AppBar, FormGroup, Grid } from '@mui/material';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import { useFormik } from 'formik';
import './App.css';
import {CatImageService} from "./service/CatImageService";

type Card = {
    name : string,
    imageUrl : string
}

const validateForm = (values: FormikValues) => {
  const errors: { name?: string } = {};

  if (!values.name) {
    errors.name = 'Please provide a name';
  }

  return errors;
};

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

          validate: validateForm,
      onSubmit: values => {
        const card = {
          name: values.name,
          imageUrl: catImageUrl
        }
        onSubmit(card);
      }
    });
    return (
      <FormGroup>
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
          <p className='error'>
          {formik.errors.name && formik.touched.name? <div>{formik.errors.name}</div> : null}</p>
        </form>
        </FormGroup>
      );
  };

  export default RandomCatForm