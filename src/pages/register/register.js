import './register.css';

export default function register() {
    return (
        <div className="register">

            <h4>¿Eres un particular?</h4>

            <p>Rellena este formulario</p>

            <form action="formParticular" method="get">

                <div class="inputBlock">
                    <label for="nameInput">Nombre</label>
                    <input type="text" id="nameInput" name="userName" placeholder="Introduce tu nombre"/>
                </div>

                <div class="inputBlock">
                    <label for="lastnameInput">Apellidos</label>
                    <input type="text" id="lastnameInput" name="lastName" placeholder="Introduce tus apellidos"/>
                </div>

                <div class="inputBlock">
                    <label for="emailInput">Email:</label>
                    <input required type="email" id="emailInput" required name="userEmail" placeholder="Introduce tu email"/>
                </div>

                <div class="inputBlock">
                    <label for="telephoneInput">Teléfono:</label>
                    <input required type="telephone" id="telephoneInput" name="telephpneInput" placeholder="Introduce tu teléfono"/>
                </div>

                <div class="inputBlock">
                    <label for="passwordInput">Contraseña</label>
                    <input type="password" id="passwordInput" required name="passwrodInput" placeholder="**************"/>
                </div>                            

                <button>Crear cuenta</button>
                    
            </form>

            <h4>¿Eres una empresa?</h4>

            <p>Rellena este formulario</p>

            <form action="formCompany" method="get">

                <div class="inputBlock">
                    <label for="nameInput">Nombre de la empresa</label>
                    <input type="text" id="nameInput" name="userName" placeholder="Introduce el nombre de tu nombre"/>
                </div>

                <div class="inputBlock">
                    <label for="cifINput">CIF</label>
                    <input type="text" id="cifINput" name="cif" placeholder="Introduce el CIF de tu empresa"/>
                </div>

                <div class="inputBlock">
                    <label for="emailInput">Email:</label>
                    <input required type="email" id="emailInput" required name="userEmail" placeholder="Introduce tu email"/>
                </div>

                <div class="inputBlock">
                    <label for="telephoneInput">Teléfono:</label>
                    <input required type="telephone" id="telephoneInput" name="telephpneInput" placeholder="Introduce tu teléfono"/>
                </div>

                <div class="inputBlock">
                    <label for="passwordInput">Contraseña</label>
                    <input type="password" id="passwordInput" required name="passwrodInput" placeholder="**************"/>
                </div>                            

                <button>Crear cuenta</button>
                    
            </form>

            
            
        </div>
    )
}




