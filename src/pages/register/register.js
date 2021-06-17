import './register.css';

export default function register() {
    return (
        <div className="register">   

            <div>
                <h2>Registro</h2> 
            </div>                                 

            <div className="inputBlock">
                <div className="formLabel">
                    <label for="nameInput">Nombre</label>
                </div>

                <input className="inputStyle" type="text" id="nameInput" name="userName" placeholder=" Elvira"/>
            </div>

            <div className="inputBlock">

                <div className="formLabel">
                    <label for="lastnameInput">Apellidos</label>
                </div>
                
                <input className="inputStyle" type="text" id="lastnameInput" name="lastName" placeholder=" Pérez Torres"/>
            </div>

            <div className="inputBlock">
                <div className="formLabel">
                    <label for="emailInput">Email:</label>
                </div>
                
                <input className="inputStyle" required type="email" id="emailInput" required name="userEmail" placeholder=" elvipt88@gmail.com"/>
            </div>

            <div className="inputBlock">
                <div className="formLabel">
                    <label for="telephoneInput">Teléfono:</label>
                </div>
                
                <input className="inputStyle" required type="telephone" id="telephoneInput" name="telephpneInput" placeholder=" 638724481"/>
            </div>

            <div className="inputBlock">
                <div className="formLabel">
                    <label for="passwordInput">Contraseña</label>
                </div>
                
                <input className="inputStyle" type="password" id="passwordInput" required name="passwrodInput" placeholder=" *************"/>
            </div>     

            <div className="registerbutton">
                <button >Crear cuenta</button>
            </div>   
       
                
        </div>            
                    
     )
}




