import React, {useEffect, useState} from 'react';
import {FormGroup} from '@mui/material';
import {FormikValues, useFormik} from "formik";
import {useParams} from "react-router-dom";
import DataService from "../Services/DataService";
import "../StyleSheets/Crude.css"


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
    const errors: {
        Name?: string,
        Miles_per_Gallon?: string,
        Cylinders?: string,
        Displacement?: string,
        Horsepower?: string,
        Weight_in_lbs?: string,
        Acceleration?: string,
        Year?: string,
        Origin?: string,
        id?: number
    } = {};

    if (!values.Name) {
        errors.Name = 'Please provide a name';
    }

    if (values.Name.length > 58) {
        errors.Name = "Name "
    }

    if (!values.Horsepower) {
        errors.Horsepower = "Please provide horsepower"
    }

    if (values.Horsepower > 40000 || values.Horsepower < 0) {
        errors.Horsepower = "Horsepower must be realistic"
    }

    if (!values.Weight_in_lbs) {
        errors.Weight_in_lbs = "Please provide weight"
    }
    if (values.Weight_in_lbs > 40000 || values.Weight_in_lbs < 0) {
        errors.Weight_in_lbs = "Weight must be realistic"
    }

    if (!values.Acceleration) {
        errors.Acceleration = "Please provide acceleration"
    }

    if (!values.Year) {
        errors.Year = "Please provide a year"
    }

    if (values.Year.length > 12) {
        errors.Year = "Not a valid Year"
    }

    if (!values.Origin) {
        errors.Origin = "Please provide an origin"
    }

    if (values.Origin.length > 85) {
        errors.Origin = "Name of origin cannot be this long"
    }

    return errors;
};

const UpdateCar = (props: any) => {

    let {id} = useParams();
    const [detail, setCarData] = useState<Car>(props.car)
    const [loop, setLoop] = useState(0)

    useEffect(() => {
        if (loop == 0) {
            DataService(localStorage.getItem("token")).getCarById(id).then((carData) => setCarData(carData.data))
            setLoop(1)
        }
    }, [detail])

    const formik = useFormik({
        initialValues: {
            Name: detail.Name,
            Miles_per_Gallon: detail.Miles_per_Gallon,
            Cylinders: detail.Cylinders,
            Displacement: detail.Displacement,
            Horsepower: detail.Horsepower,
            Weight_in_lbs: detail.Weight_in_lbs,
            Acceleration: detail.Weight_in_lbs,
            Year: detail.Year,
            Origin: detail.Origin,
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
            props.onSubmit(updatedCar);
        }
    });

    return (<div>
            <FormGroup>
                {formik == null || detail == null ? null :
                    <form onSubmit={formik.handleSubmit}>

                        <h3>Update data</h3>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="name">Name</label>
                                </td>
                                <td>
                                    <input
                                        id="Name"
                                        name="Name"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.Name}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="Miles_per_Gallon">Mpg</label>
                                </td>
                                <td>
                                    <input
                                        id="Miles_per_Gallon"
                                        name="Miles_per_Gallon"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.Miles_per_Gallon}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="Cylinders">Cylinders</label>
                                </td>
                                <td>
                                    <input
                                        id="Cylinders"
                                        name="Cylinders"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.Cylinders}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="Displacement">Displacement</label>
                                </td>
                                <td>
                                    <input
                                        id="Displacement"
                                        name="Displacement"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.Displacement}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="Horsepower">Horsepower</label>
                                </td>
                                <td>
                                    <input
                                        id="Horsepower"
                                        name="Horsepower"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.Horsepower}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="Weight_in_lbs">Weight_in_lbs</label>
                                </td>
                                <td>
                                    <input
                                        id="Weight_in_lbs"
                                        name="Weight_in_lbs"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.Weight_in_lbs}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="Acceleration">Acceleration</label>
                                </td>
                                <td>
                                    <input
                                        id="Acceleration"
                                        name="Acceleration"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.Acceleration}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="Year">Date</label>
                                </td>
                                <td>
                                    <input
                                        id="Year"
                                        name="Year"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.Year}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="Origin">Origin</label>
                                </td>
                                <td>
                                    <input
                                        id="Origin"
                                        name="Origin"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.Origin}
                                    />
                                </td>
                            </tr>
                        </table>
                        <br/>

                        <button className={"submit"} type="submit">Submit</button>
                        <div>
                            <p className='error'>
                                {formik.errors.Name && formik.touched.Name ?
                                    <div>{formik.errors.Name}</div> : null}</p>

                            <p className='error'>
                                {formik.errors.Miles_per_Gallon && formik.touched.Miles_per_Gallon ?
                                    <div>{formik.errors.Miles_per_Gallon}</div> : null}</p>

                            <p className='error'>
                                {formik.errors.Cylinders && formik.touched.Cylinders ?
                                    <div>{formik.errors.Cylinders}</div> : null}</p>

                            <p className='error'>
                                {formik.errors.Displacement && formik.touched.Displacement ?
                                    <div>{formik.errors.Displacement}</div> : null}</p>

                            <p className='error'>
                                {formik.errors.Horsepower && formik.touched.Horsepower ?
                                    <div>{formik.errors.Horsepower}</div> : null}</p>

                            <p className='error'>
                                {formik.errors.Weight_in_lbs && formik.touched.Weight_in_lbs ?
                                    <div>{formik.errors.Weight_in_lbs}</div> : null}</p>

                            <p className='error'>
                                {formik.errors.Acceleration && formik.touched.Acceleration ?
                                    <div>{formik.errors.Acceleration}</div> : null}</p>

                            <p className='error'>
                                {formik.errors.Year && formik.touched.Year ?
                                    <div>{formik.errors.Year}</div> : null}</p>

                            <p className='error'>
                                {formik.errors.Origin && formik.touched.Origin ?
                                    <div>{formik.errors.Origin}</div> : null}</p>
                        </div>
                    </form>
                }
            </FormGroup>
        </div>
    );
}

export default UpdateCar;