import RegisterService from "./Serices/RegisterService";
import RegisterForm from "./RegisterForm";

type User = {
    email : string,
    password : string
}

const Register = () => {
    const handleRegisterSubmit = (newUser : User) => {
        RegisterService().registerUser(newUser)
    }

    return (
        <div>
            <h3>Register</h3>
            <RegisterForm onSubmit={handleRegisterSubmit}/>
        </div>
    )
}

export default Register;