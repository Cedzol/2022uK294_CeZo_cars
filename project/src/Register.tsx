import RegisterService from "./Serices/RegisterService";
import RegisterForm from "./RegisterForm";
import {useNavigate} from "react-router-dom";

type User = {
    email : string,
    password : string
}

const Register = () => {
    const navigate = useNavigate();
    const handleRegisterSubmit = (newUser : User) => {
        RegisterService().registerUser(newUser).then(() => navigate("/cars"));
        localStorage.setItem("log", "true");
    }

    return (
        <div>
            <h3>Register</h3>
            <RegisterForm onSubmit={handleRegisterSubmit}/>
        </div>
    )
}

export default Register;