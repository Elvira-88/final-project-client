import { Redirect, useHistory} from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../context/AuthContext";
import { LOGIN_URL } from "../../config/config";
import jwt_decode from "jwt-decode";
import './login.css';

export default function Login() {

    const formInitialState = {username: "marti@gmail.com", password: "123"};
    const [form, handleChange] = useForm(formInitialState);
    const {signIn, isAuthenticated, isAdmin} = useAuthContext();
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(LOGIN_URL, options);
        const data = await response.json();
        
        if(response.status >= 200 && response.status < 300) {   

            const token = data.token;
            const user = jwt_decode(token);

            signIn(token, user);
            
            // if  (isAdmin()) {
            //     history.push("/admin")
            // } else {
            //     history.push("/course")
            // }  
            
            history.push("/admin")      
            
        } else {
            alert("Login incorrecto");
        }
    }; 

    return isAuthenticated ? <Redirect to="/courses" /> : (
        <div className="login">
            <form onSubmit={handleSubmit}>
            <h2>Inicia sesión</h2>
            <div className="loginContent">
                <div className="formLabel">
                    <label>Usuario</label>
                </div>
                <input onChange={handleChange} value={form.username} name="username" className="inputStyle" type="email" placeholder=" Email"/>               
            </div>
            <div className="loginContent">
                <div className="formLabel">  
                <label>Contraseña</label> 
                </div>     
                <input onChange={handleChange} value={form.password} name="password" className="inputStyle" type="password" placeholder=" *************"/>
            </div>
            <a className="accessProblems" href="#">¿Olvidaste tu contraseña?</a>
            <a className="accessProblems" href="#">No estoy registrado</a>
            <div className="loginButton">
                <button>Acceder</button>                
            </div> 
            </form>            
            
        </div>

    )
}
