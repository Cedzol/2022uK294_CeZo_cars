import React from 'react';
import { FormGroup } from '@mui/material';
import {FormikValues, useFormik} from "formik";
import "./Crude.css"
import {useNavigate} from "react-router-dom";


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

    if (values.Name.length > 58){
        errors.Name = "Name "
    }

    if (!values.Horsepower){
        errors.Horsepower = "Please provide horsepower"
    }

    if (values.Horsepower > 40000 || values.Horsepower < 0){
        errors.Horsepower = "Horsepower must be realistic"
    }

    if (!values.Weight_in_lbs){
        errors.Weight_in_lbs = "Please provide weight"
    }
    if (values.Weight_in_lbs > 40000 || values.Weight_in_lbs < 0){
        errors.Weight_in_lbs = "Weight must be realistic"
    }

    if (!values.Acceleration) {
        errors.Acceleration = "Please provide acceleration"
    }

    if (!values.Year) {
        errors.Year = "Please provide a year"
    }

    if (values.Year.length > 12){
        errors.Year = "Not a valid Year"
    }

    if (!values.Origin) {
        errors.Origin = "Please provide an origin"
    }

    if (values.Origin.length > 85){
        errors.Origin = "Name of origin cannot be this long"
    }

    return errors;
};

const CreateCarForm = ({onSubmit} : {onSubmit: (user: any) => void} ) => {

    const navigate = useNavigate();

    function handleBack(){
        navigate("/cars")
    }

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

    return (<div>
            {localStorage.getItem("log") != "true" ? <p>Try to log in</p> :
                <FormGroup>
                    <div className={"center"}>
                        <form className={"form"} onSubmit={formik.handleSubmit}>
                            <div className={"createCard"}>
                                <h2>Save a new car</h2>
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
                                            <label htmlFor="Weight_in_lbs">Weight in lbs</label>
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
                                            <label htmlFor="Year">Year</label>
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

                                <div className={"buttons"}>
                                    <button className={"submit"} type="submit">Submit</button>
                                    <button className={"createBack"} onClick={() => handleBack()}>back</button>
                                </div>

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
                            </div>
                        </form>
                    </div>
                </FormGroup>
            }
        </div>
    );
}

export default CreateCarForm;