import LoginForm from "./LoginForm";
import LoginService from "./Serices/LoginService";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

type User = {
    email : string,
    password : string
}

const Login = (props : any) => {



    function handleLoginSubmit(user : User) {
        LoginService().loginUser(user);
        props.onChange(true);
    }

    return (
        <div>
            <h3>Login</h3>
            <LoginForm onSubmit={handleLoginSubmit}/>
        </div>
)
}

export default Login;