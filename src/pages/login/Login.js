import {useHistory} from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

import './login.css';


export default function Login() {

    // const history = useHistory();
    // const { isAuthenticated, setIsAuthenticated } = useAuthContext();

    // const LOGIN_URL = "";

    // function login() {
    //     fetch(LOGIN_URL)
    //     .then(response => response.json())
    //     .then()
    //     setIsAuthenticated(true)
    //     history.push(`/courses/`);

    return (
        <div className="login">
            <h2>Inicia sesión</h2>
            <div className="loginContent">
                <div className="formLabel">
                    <label>Usuario</label>
                </div>
                <input className="inputStyle" type="text" placeholder=" Email"/>
               
            </div>
            <div className="loginContent">
                <div className="formLabel">  
                <label>Contraseña</label> 
                </div>     
                <input className="inputStyle" type="password" placeholder=" *************"/>
            </div>
            <a className="accessProblems" href="#">¿Olvidaste tu contraseña?</a>
            <a className="accessProblems" href="#">No estoy registrado</a>
            <div className="loginButton">
                <button>Acceder</button>                
            </div>           
            
        </div>

    )
}
