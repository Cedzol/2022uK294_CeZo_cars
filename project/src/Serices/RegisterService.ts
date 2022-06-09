import {AxiosInstance} from "axios";
import {defaultAxiosInstance} from "../Api"

type User = {
    email : string,
    password : string
}

const RegisterService = (api: AxiosInstance = defaultAxiosInstance) => ({

    registerUser: async (user : User) => {
        console.log(user)
        api.post('/register', {
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

export default RegisterService;

