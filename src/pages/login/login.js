import './login.css';

export default function login() {
    return (
        <div className="login">
            <label htmlFor="">Usuario</label>
            <input type="text"/>
            {/* <br/>           */}
            <label htmlFor="">Contraseña</label>
            <input type="text"/>
            <button>Acceder</button>
        </div>
    )
}
