import { REGISTER_URL } from "../../config/config";
import { useForm } from "../../hooks/useForm";
import {useHistory} from "react-router-dom";

import './register.css';

export default function Register() {

    const formInitialState = { name: "", lastName: "", dni: "", email: "", password: "", phone: "", addres: ""};
    const [form, handleChange] = useForm(formInitialState)
   
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(REGISTER_URL, options);
        // const data = await response.json();
        
        if(response.status >= 200 && response.status < 300) {
            
            history.push("/login")    
            alert("¡Bienvenido a Formatio!Ya puedes acceder a tu cuenta");
        }
    };

    return (
        <div className="register">  

            <form onSubmit={handleSubmit}>

                <div>
                    <h2>Registro</h2> 
                </div>                                 

                <div className="inputBlock">
                    <div className="formLabel">
                        <label for="nameInput">Nombre</label>
                    </div>

                    <input onChange={handleChange} value={form.name}  name="name" type="text" className="inputStyle"  id="nameInput" placeholder=" Elvira"/>
                </div>

                <div className="inputBlock">

                    <div className="formLabel">
                        <label for="lastnameInput">Apellidos</label>
                    </div>
                    
                    <input onChange={handleChange} value={form.lastName}  name="lastName" className="inputStyle" type="text" id="lastnameInput" placeholder=" Pérez Torres"/>
                </div>

                <div className="inputBlock">
                    <div className="formLabel">
                        <label for="dniInput">DNI:</label>
                    </div>
                    
                    <input onChange={handleChange} value={form.dniInput}  name="dniInput" className="inputStyle" required type="dni" id="dniInput" placeholder=" 45326100-T"/>
                </div>

                <div className="inputBlock">
                    <div className="formLabel">
                        <label for="emailInput">Email:</label>
                    </div>
                    
                    <input onChange={handleChange} value={form.email}  name="email" className="inputStyle" required type="email" id="emailInput" placeholder=" elvipt88@gmail.com"/>
                </div>

                <div className="inputBlock">
                    <div className="formLabel">
                        <label for="passwordInput">Contraseña</label>
                    </div>
                    
                    <input onChange={handleChange} value={form.password} name="password" className="inputStyle" type="password" id="passwordInput" placeholder=" *************"/>
                </div>    

                
                <div className="inputBlock">
                    <div className="formLabel">
                        <label for="phoneInput">Teléfono:</label>
                    </div>
                    
                    <input onChange={handleChange} value={form.phone}  name="phone" className="inputStyle" type="telephone" id="phoneInput" placeholder=" 638724481"/>
                </div>

                
                <div className="inputBlock">
                    <div className="formLabel">
                        <label for="addressInput">Dirección:</label>
                    </div>
                    
                    <input onChange={handleChange} value={form.address}  name="address" className="inputStyle" required type="address" id="addressInput" placeholder=" Calle Luchana nº 7 3ºA Málaga"/>
                </div> 

                <div className="registerbutton">
                    <button >Crear cuenta</button>
                </div>   
                
            </form>           
       
                
        </div>            
                    
     )
}




