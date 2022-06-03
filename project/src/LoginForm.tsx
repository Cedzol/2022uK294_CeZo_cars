import React, {useEffect, useState} from 'react';
import { AppBar, FormGroup, Grid } from '@mui/material';
import {FormikValues, useFormik} from "formik";



type User = {
    email : string,
    password : string
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

const LoginForm = ({onSubmit} : {onSubmit: (user: any) => void} ) => {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validate: validateForm,
        onSubmit: values => {
            const newUser = {
                email: values.email,
                password: values.password
            }
            onSubmit(newUser);
        }
    });

    return (
        <FormGroup>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button type="submit">Submit</button>
                <div>
                    <p className='error'>
                        {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}</p>

                    <p className='error'>
                        {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}</p>
                </div>
            </form>
        </FormGroup>
    );
}

export default LoginForm;