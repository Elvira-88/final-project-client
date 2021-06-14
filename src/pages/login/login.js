import './login.css';

export default function login() {
    return (
        <div className="login">
            <div className="logincontent">
                <label className="user" htmlFor="">Usuario</label>
                <input className="user" type="text"/>
            </div>
            <div className="logincontent">        
                <label htmlFor="">Contraseña</label>
                <input type="text"/>
            </div>
            <button className="logincontent">Acceder</button>
        </div>
    )
}
