import axios, {AxiosInstance} from "axios";
import {defaultAxiosInstance} from "../Api"

type User = {
    email : string,
    password : string
}

const LoginService = (api: AxiosInstance = defaultAxiosInstance) => ({

    loginUser: (user : User) => {
        console.log(user)
        api.post('/login', {
            email: user.email,
            password: user.password
        })
            .then(function (response) {
                localStorage.setItem("token", response.data.accessToken)
                console.log(response.data.accessToken);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})

export default LoginService;

