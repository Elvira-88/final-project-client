import './login.css';

export default function login() {
    return (
        <div className="login">
            <h2>Inicia sesión</h2>
            <div className="loginContent">
                <input className="inputStyle" type="text" placeholder=" Usuario"/>
            </div>
            <div className="loginContent">        
                <input className="inputStyle" type="password" placeholder=" Contraseña"/>
            </div>
            <a className="accessProblems" href="#">¿Olvidaste tu contraseña?</a>
            <a className="accessProblems" href="#">No estoy registrado</a>
            <div className="loginButton">
                <button>Acceder</button>                
            </div>            
            
        </div>
    )
}
