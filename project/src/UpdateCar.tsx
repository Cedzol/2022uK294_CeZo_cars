import React, {useEffect, useState} from 'react';
import { AppBar, FormGroup, Grid } from '@mui/material';
import {FormikValues, useFormik} from "formik";
import {useParams} from "react-router-dom";
import DataService from "./Serices/DataService";


type Car = {
    Name: string,
    Miles_per_Gallon: number,
    Cylinders: number,
    Displacement: number,
    Horsepower: number,
    Weight_in_lbs: number,
    Acceleration: number,
    Year: string,
    Origin: string,
    id: number
}

const validateForm = (values: FormikValues) => {
    const errors: { email?: string, password? : string } = {};

    if (!values.email) {
        errors.email = 'Please provide an email';
    }

    if (!values.password) {
        errors.password = 'Please provide a password';
    }

    return errors;
};

const PutForm = ({onSubmit} : {onSubmit: (car: any) => void}) => {

    let {id} = useParams();

    const [loop, setLoop] = useState(0)

    // @ts-ignore
    const getCar: () => Car = async () => {
        if (loop === 0) {
            DataService(localStorage.getItem("token")).getCarById(id)
                .then((data) => setDetail(data.data))
                .catch(function (error) {
                    console.log(error);
                });
            setLoop(1);
        }
    }
    const [detail, setDetail] = useState<Car>(getCar())

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
            id: detail.id
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
                id: detail.id
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

export default PutForm;