import axios, {AxiosInstance} from "axios";
import {defaultAxiosInstance} from "../Api"
import {useNavigate} from "react-router-dom";

type User = {
    email : string,
    password : string
}

const LoginService = (api: AxiosInstance = defaultAxiosInstance) => ({

    loginUser: async (user : User) => {
        console.log(user)
        api.post('/login', {
            email: user.email,
            password: user.password
        })
            .then(function (response) {
                localStorage.setItem("token", '')
                localStorage.setItem("token", response.data.accessToken)
                localStorage.setItem("log", "true")
                console.log(response.data.accessToken);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})

export default LoginService;

