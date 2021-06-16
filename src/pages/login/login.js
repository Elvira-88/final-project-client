import './login.css';

export default function login() {
    return (
        <div className="login">
            <h1>Bienvenido</h1>
            <div className="loginContent">
                <input type="text" placeholder="Usuario"/>
            </div>
            <div className="loginContent">        
                <input type="password" placeholder="Contraseña"/>
            </div>
            <a href="#">¿Olvidaste tu contraseña?</a>
            <div className="loginButton">
                <button>Acceder</button>                
            </div>            
            
        </div>
    )
}
