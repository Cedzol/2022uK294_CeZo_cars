import React, {useEffect, useState} from 'react';
import { AppBar, FormGroup, Grid } from '@mui/material';
import {FormikValues, useFormik} from "formik";
import RegisterService from "./Serices/RegisterService";


type Car = {
    Name : string,
    Miles_per_Gallon : number,
    Cylinders : number,
    Displacement : number,
    Horsepower : number,
    Weight_in_lbs : number,
    Acceleration : number,
    Year : string,
    Origin : string,
    id : number
}

const validateForm = (values: FormikValues) => {
    const errors: { Name? : string,
        Miles_per_Gallon? : string,
        Cylinders? : string,
        Displacement? : string,
        Horsepower? : string,
        Weight_in_lbs? : string,
        Acceleration? : string,
        Year? : string,
        Origin? : string,
        id? : number } = {};

    if (!values.Name) {
        errors.Name = 'Please provide a name';
    }

    if (!values.Miles_per_Gallon) {
        errors.Miles_per_Gallon = 'Please provide mpg';
    }
    if (!values.Cylinders){
        errors.Cylinders = "Please provide number of cylinders"
    }

    if (!values.Displacement){
        errors.Displacement = "Please provide displacement"
    }

    if (!values.Horsepower){
        errors.Horsepower = "Please provide horsepower"
    }

    if (!values.Weight_in_lbs){
        errors.Weight_in_lbs = "Please provide weight"
    }

    if (!values.Acceleration) {
        errors.Acceleration = "Please provide acceleration"
    }

    if (!values.Year) {
        errors.Year = "Please provide a year"
    }

    if (!values.Origin) {
        errors.Origin = "Please provide an origin"
    }

    return errors;
};

const CreateCarForm = ({onSubmit} : {onSubmit: (user: any) => void} ) => {


    const formik = useFormik({
        initialValues: {
            Name: '',
            Miles_per_Gallon: '',
            Cylinders: '',
            Displacement: '',
            Horsepower: '',
            Weight_in_lbs: '',
            Acceleration: '',
            Year: '',
            Origin: '',
            id: ''
        },

        validate: validateForm,
        onSubmit: values => {
            const updatedCar = {
                Name: values.Name,
                Miles_per_Gallon: values.Miles_per_Gallon,
                Cylinders: values.Cylinders,
                Displacement: values.Displacement,
                Horsepower: values.Horsepower,
                Weight_in_lbs: values.Weight_in_lbs,
                Acceleration: values.Acceleration,
                Year: values.Year,
                Origin: values.Origin,
                id: null
            }
            onSubmit(updatedCar);
        }
    });

    return (
        <FormGroup>
            <form onSubmit={formik.handleSubmit}>

                <input
                    id="Name"
                    name="Name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Name}

                />
                <label htmlFor="name">Name</label>


                <input
                    id="Miles_per_Gallon"
                    name="Miles_per_Gallon"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.Miles_per_Gallon}

                />
                <label htmlFor="Miles_per_Gallon">Mpg</label>

                <input
                    id="Cylinders"
                    name="Cylinders"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.Cylinders}

                />
                <label htmlFor="Cylinders">Cylinders</label>

                <input
                    id="Displacement"
                    name="Displacement"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.Displacement}

                />
                <label htmlFor="Displacement">Displacement</label>

                <input
                    id="Horsepower"
                    name="Horsepower"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.Horsepower}

                />
                <label htmlFor="Horsepower">Horsepower</label>

                <input
                    id="Weight_in_lbs"
                    name="Weight_in_lbs"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.Weight_in_lbs}

                />
                <label htmlFor="Weight_in_lbs">Weight_in_lbs</label>

                <input
                    id="Acceleration"
                    name="Acceleration"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.Acceleration}

                />
                <label htmlFor="Acceleration">Acceleration</label>

                <input
                    id="Year"
                    name="Year"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Year}

                />
                <label htmlFor="Year">Year</label>

                <input
                    id="Origin"
                    name="Origin"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Origin}

                />
                <label htmlFor="Origin">Origin</label>

                <br/>

                <button type="submit">Submit</button>
                <div>
                    <p className='error'>
                        {formik.errors.Name && formik.touched.Name ? <div>{formik.errors.Name}</div> : null}</p>

                    <p className='error'>
                        {formik.errors.Miles_per_Gallon && formik.touched.Miles_per_Gallon ? <div>{formik.errors.Miles_per_Gallon}</div> : null}</p>
                </div>
            </form>
        </FormGroup>
    );
}

export default CreateCarForm;