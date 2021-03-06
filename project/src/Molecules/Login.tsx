import LoginForm from "../Organism/LoginForm";
import LoginService from "../Services/LoginService";
import {useNavigate} from "react-router-dom";

type User = {
    email: string,
    password: string
}

const Login = (props: any) => {

    const navigate = useNavigate();

    function handleLoginSubmit(user: User) {
        LoginService().loginUser(user).then(() => navigate("/cars"))
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