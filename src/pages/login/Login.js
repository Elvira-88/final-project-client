import './login.css';

export default function Login() {

       //const LOGIN_URL = "https://api/formatio/login/";
       //https://api/formatio/login/f=narbelys@gmail.com,p=1234
       //data={user:"narbelys", pass=1234}
       //https://api/formatio/login/URL 
       //login por post o get??
       //1.  Login por post o get
       //2. si dice post, hacer ejemplo api post 
       //3. hacer api get, curso por id, como el hire-course


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
